const express = require('express');
const { body, validationResult, query } = require('express-validator');
const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const auth = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - duration
 *         - level
 *         - category
 *       properties:
 *         _id:
 *           type: string
 *           description: Auto-generated course ID
 *         name:
 *           type: string
 *           description: Course name
 *         description:
 *           type: string
 *           description: Course description
 *         duration:
 *           type: string
 *           description: Course duration
 *         level:
 *           type: string
 *           enum: [Beginner, Intermediate, Advanced]
 *         category:
 *           type: string
 *           enum: [programming, web, database, data-science, framework]
 *         rating:
 *           type: number
 *           minimum: 0
 *           maximum: 5
 *         reviews:
 *           type: number
 *         popular:
 *           type: boolean
 *         price:
 *           type: number
 *         instructor:
 *           type: string
 */

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get all courses with filtering and pagination
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: level
 *         schema:
 *           type: string
 *         description: Filter by level
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search in course name and description
 *       - in: query
 *         name: popular
 *         schema:
 *           type: boolean
 *         description: Filter popular courses
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of courses per page
 *     responses:
 *       200:
 *         description: List of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     currentPage:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *                     totalCourses:
 *                       type: integer
 */
router.get('/', [
  query('page').optional().isInt({ min: 1 }),
  query('limit').optional().isInt({ min: 1, max: 50 }),
  query('category').optional().isIn(['programming', 'web', 'database', 'data-science', 'framework']),
  query('level').optional().isIn(['Beginner', 'Intermediate', 'Advanced']),
  query('popular').optional().isBoolean()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { category, level, search, popular, page = 1, limit = 10 } = req.query;
    
    // Build filter object
    const filter = { isActive: true };
    
    if (category) filter.category = category;
    if (level) filter.level = level;
    if (popular === 'true') filter.popular = true;
    
    // Build search query
    let query = Course.find(filter);
    
    if (search) {
      query = query.find({
        $or: [
          { name: { $regex: search, $options: 'i' } },
          { description: { $regex: search, $options: 'i' } },
          { tags: { $in: [new RegExp(search, 'i')] } }
        ]
      });
    }

    // Get total count for pagination
    const totalCourses = await Course.countDocuments(query.getQuery());
    const totalPages = Math.ceil(totalCourses / limit);

    // Apply pagination and sorting
    const courses = await query
      .sort({ popular: -1, rating: -1, createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .select('-__v');

    res.json({
      success: true,
      data: courses,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalCourses,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/popular:
 *   get:
 *     summary: Get popular courses
 *     tags: [Courses]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 6
 *         description: Number of popular courses to return
 *     responses:
 *       200:
 *         description: List of popular courses
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Course'
 */
router.get('/popular', async (req, res) => {
  try {
    const { limit = 6 } = req.query;
    
    const courses = await Course.find({ popular: true, isActive: true })
      .sort({ rating: -1, enrollmentCount: -1 })
      .limit(parseInt(limit))
      .select('-__v');

    res.json({
      success: true,
      data: courses
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/categories:
 *   get:
 *     summary: Get course categories with counts
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: List of categories with course counts
 */
router.get('/categories', async (req, res) => {
  try {
    const categories = await Course.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);

    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get a single course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Course'
 *       404:
 *         description: Course not found
 */
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).select('-__v');
    
    if (!course || !course.isActive) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a new course (Admin only)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 *       400:
 *         description: Validation errors
 *       401:
 *         description: Unauthorized
 */
router.post('/', auth, [
  body('name').notEmpty().trim().withMessage('Course name is required'),
  body('description').notEmpty().withMessage('Course description is required'),
  body('duration').notEmpty().withMessage('Course duration is required'),
  body('level').isIn(['Beginner', 'Intermediate', 'Advanced']).withMessage('Invalid level'),
  body('category').isIn(['programming', 'web', 'database', 'data-science', 'framework']).withMessage('Invalid category'),
  body('rating').optional().isFloat({ min: 0, max: 5 }),
  body('price').optional().isNumeric()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const course = new Course(req.body);
    await course.save();

    res.status(201).json({
      success: true,
      data: course,
      message: 'Course created successfully'
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     summary: Update a course (Admin only)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', auth, [
  body('name').optional().notEmpty().trim(),
  body('description').optional().notEmpty(),
  body('duration').optional().notEmpty(),
  body('level').optional().isIn(['Beginner', 'Intermediate', 'Advanced']),
  body('category').optional().isIn(['programming', 'web', 'database', 'data-science', 'framework']),
  body('rating').optional().isFloat({ min: 0, max: 5 }),
  body('price').optional().isNumeric()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.json({
      success: true,
      data: course,
      message: 'Course updated successfully'
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete a course (Admin only)
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      { isActive: false, updatedAt: new Date() },
      { new: true }
    );

    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }

    res.json({
      success: true,
      message: 'Course deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/courses/{id}/enroll:
 *   post:
 *     summary: Enroll in a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               phone:
 *                 type: string
 *               experience:
 *                 type: string
 *               motivation:
 *                 type: string
 *               preferredSchedule:
 *                 type: string
 *               agreeToTerms:
 *                 type: boolean
 *               courseId:
 *                 type: string
 *               courseName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enrollment successful
 *       404:
 *         description: Course not found
 */
router.post('/:id/enroll', [
  body('email').isEmail().withMessage('Valid email is required'),
  body('name').notEmpty().withMessage('Name is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('experience').notEmpty().withMessage('Experience level is required'),
  body('motivation').notEmpty().withMessage('Motivation is required'),
  body('preferredSchedule').notEmpty().withMessage('Preferred schedule is required'),
  body('agreeToTerms').isBoolean().withMessage('Terms agreement is required')
], async (req, res) => {
  try {
    console.log('Enrollment request received:', {
      courseId: req.params.id,
      body: req.body
    });

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ 
        success: false, 
        message: 'Validation failed', 
        errors: errors.array() 
      });
    }

    const courseId = req.params.id;
    const {
      name,
      email,
      phone,
      experience,
      motivation,
      preferredSchedule,
      agreeToTerms,
      courseName
    } = req.body;

    // Check if terms are agreed
    if (!agreeToTerms) {
      return res.status(400).json({ 
        success: false, 
        message: 'You must agree to the terms and conditions' 
      });
    }

    // For static course IDs (like 1, 2, 3), we'll handle them differently
    // than MongoDB ObjectIds
    let course = null;
    let actualCourseName = courseName;

    // Try to find course by MongoDB ObjectId first
    if (courseId.match(/^[0-9a-fA-F]{24}$/)) {
      course = await Course.findById(courseId);
      if (course) {
        actualCourseName = course.name;
      }
    }

    // If no course found by ObjectId, it might be a static course ID
    // In this case, we'll use the courseName provided
    if (!course && courseName) {
      console.log(`Using static course data for ID: ${courseId}, Name: ${courseName}`);
      // For static courses, we'll just accept the enrollment
      actualCourseName = courseName;
    } else if (!course) {
      return res.status(404).json({ 
        success: false, 
        message: 'Course not found' 
      });
    }

    // Check for duplicate enrollment
    const existingEnrollment = await Enrollment.findOne({
      email: email,
      courseId: courseId
    });

    if (existingEnrollment) {
      return res.status(400).json({
        success: false,
        message: 'You are already enrolled in this course'
      });
    }

    // Create enrollment record
    const enrollment = new Enrollment({
      courseId: courseId,
      courseName: actualCourseName,
      name,
      email,
      phone,
      experience,
      motivation,
      preferredSchedule,
      agreeToTerms,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    await enrollment.save();
    console.log('Enrollment saved successfully:', enrollment._id);

    // Increment enrollment count for MongoDB courses
    if (course) {
      await Course.findByIdAndUpdate(courseId, {
        $inc: { enrollmentCount: 1 }
      });
    }

    // TODO: Send confirmation email here
    // await sendEnrollmentConfirmationEmail(enrollment);

    res.json({
      success: true,
      message: `Successfully enrolled in ${actualCourseName}! You will receive a confirmation email shortly.`,
      data: {
        enrollmentId: enrollment._id,
        courseId: courseId,
        courseName: actualCourseName,
        enrolledAt: enrollment.enrolledAt,
        status: enrollment.status
      }
    });
  } catch (error) {
    console.error('Enrollment error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process enrollment. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;

const express = require('express');
const Analytics = require('../models/Analytics');
const auth = require('../middleware/auth');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Analytics:
 *       type: object
 *       properties:
 *         page:
 *           type: string
 *           description: Page visited
 *         userAgent:
 *           type: string
 *           description: User's browser information
 *         ip:
 *           type: string
 *           description: User's IP address
 *         timestamp:
 *           type: string
 *           format: date-time
 *           description: Visit timestamp
 */

/**
 * @swagger
 * /api/analytics/track:
 *   post:
 *     summary: Track a page visit
 *     tags: [Analytics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               page:
 *                 type: string
 *                 description: Page being visited
 *               referrer:
 *                 type: string
 *                 description: Referring page
 *     responses:
 *       201:
 *         description: Visit tracked successfully
 *       400:
 *         description: Bad request
 */
router.post('/track', async (req, res) => {
  try {
    const { page, referrer } = req.body;
    const userAgent = req.get('User-Agent');
    const ip = req.ip || req.connection.remoteAddress;

    const analytics = new Analytics({
      page,
      referrer,
      userAgent,
      ip,
      timestamp: new Date()
    });

    await analytics.save();
    res.status(201).json({ success: true, message: 'Visit tracked' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/analytics/stats:
 *   get:
 *     summary: Get analytics statistics (protected)
 *     tags: [Analytics]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Analytics statistics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalVisits:
 *                   type: number
 *                 uniqueVisitors:
 *                   type: number
 *                 topPages:
 *                   type: array
 *                 dailyVisits:
 *                   type: array
 *       401:
 *         description: Unauthorized
 */
router.get('/stats', auth, async (req, res) => {
  try {
    const totalVisits = await Analytics.countDocuments();
    const uniqueVisitors = await Analytics.distinct('ip').then(ips => ips.length);
    
    const topPages = await Analytics.aggregate([
      { $group: { _id: '$page', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);

    const today = new Date();
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    const dailyVisits = await Analytics.aggregate([
      { $match: { timestamp: { $gte: thirtyDaysAgo } } },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } }
    ]);

    res.json({
      success: true,
      data: {
        totalVisits,
        uniqueVisitors,
        topPages,
        dailyVisits
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

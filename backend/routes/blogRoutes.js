import express from 'express';
import { createBlogPost, getBlogPost } from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogPost).post(protect, createBlogPost)
export default router;
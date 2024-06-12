import { Router } from 'express';
import { getReviews, addReview, deleteReview } from '../controllers/reviewController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router({ mergeParams: true });

router.get('/', getReviews);
router.post('/', authMiddleware, addReview);
router.delete('/:id', authMiddleware, deleteReview);

export default router;

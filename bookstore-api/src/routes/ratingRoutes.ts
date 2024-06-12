import { Router } from 'express';
import { getRatings, addRating } from '../controllers/ratingController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router({ mergeParams: true });

router.get('/', getRatings);
router.post('/', authMiddleware, addRating);

export default router;

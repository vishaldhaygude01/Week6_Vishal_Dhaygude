import { Router } from 'express';
import authorRoutes from './authorRoutes';
import bookRoutes from './bookRoutes';
import userRoutes from './userRoutes';
import reviewRoutes from './reviewRoutes';
import ratingRoutes from './ratingRoutes';
import paymentRoutes from './paymentRoutes';

const router = Router();

router.use('/authors', authorRoutes);
router.use('/books', bookRoutes);
router.use('/users', userRoutes);
router.use('/books/:bookId/reviews', reviewRoutes);
router.use('/books/:bookId/ratings', ratingRoutes);
router.use('/orders', paymentRoutes);

export default router;

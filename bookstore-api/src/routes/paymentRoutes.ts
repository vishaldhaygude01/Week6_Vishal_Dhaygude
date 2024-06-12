import { Router } from 'express';
import { createOrder, getOrderById } from '../controllers/paymentController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authMiddleware, createOrder);
router.get('/:id', authMiddleware, getOrderById);

export default router;

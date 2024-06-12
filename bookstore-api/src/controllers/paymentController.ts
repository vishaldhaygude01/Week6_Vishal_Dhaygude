import { Request, Response } from 'express';
import { createPayment } from '../services/paymentService';
import { Payment } from '../models';
import { User } from '../models';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user as User;
    const { bookId, amount } = req.body;
    const payment = await createPayment(user.id, bookId, amount);
    res.status(201).json(payment);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user as User;
    const payment = await Payment.findOne({ where: { id: req.params.id, userId: user.id } });
    if (payment) {
      res.json(payment);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

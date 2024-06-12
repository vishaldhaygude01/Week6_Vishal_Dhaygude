import { Request, Response } from 'express';
import { Review } from '../models';

export const getReviews = async (req: Request, res: Response): Promise<void> => {
  try {
    const reviews = await Review.findAll({ where: { bookId: req.params.bookId } });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, bookId, content } = req.body;
    const review = await Review.create({ userId, bookId, content });
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const deleteReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (!review) {
      res.status(404).json({ error: 'Review not found' });
      return;
    }
    await review.destroy();
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

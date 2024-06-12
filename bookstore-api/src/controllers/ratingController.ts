import { Request, Response } from 'express';
import { Rating } from '../models';
import { User } from '../models';

export const getRatings = async (req: Request, res: Response): Promise<void> => {
  try {
    const ratings = await Rating.findAll({ where: { bookId: req.params.bookId } });
    res.json(ratings);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const addRating = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user as User;
    const { rating } = req.body;
    const newRating = await Rating.create({
      userId: user.id,
      bookId: req.params.bookId,
      rating,
    });
    res.status(201).json(newRating);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

import { Request, Response } from 'express';
import { Book, Author, Review, Rating } from '../models';

export const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.findAll({ include: [Author, Review, Rating] });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findByPk(req.params.id, { include: [Author, Review, Rating] });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const createBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const updateBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.update(req.body);
      res.json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const deleteBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      await book.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

import { Request, Response } from 'express';
import { Author } from '../models';
import { User } from '../models';

export const getAuthors = async (req: Request, res: Response): Promise<void> => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const getAuthorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const createAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const updateAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.update(req.body);
      res.json(author);
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const deleteAuthor = async (req: Request, res: Response): Promise<void> => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (author) {
      await author.destroy();
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Author not found' });
    }
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

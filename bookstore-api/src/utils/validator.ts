import { Request, Response, NextFunction } from 'express';

export const validateRegister = (req: Request, res: Response, next: NextFunction): void => {
  const { username, email, password } = req.body;
  const errors: string[] = [];

  if (!username || typeof username !== 'string' || username.length < 5) {
    errors.push('Username must be a string with at least 5 characters.');
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    errors.push('Please provide a valid email address.');
  }

  if (!password || typeof password !== 'string' || password.length < 5) {
    errors.push('Password must be a string with at least 5 characters.');
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

export const validateLogin = (req: Request, res: Response, next: NextFunction): void => {
  const { username, password } = req.body;
  const errors: string[] = [];

  if (!username || typeof username !== 'string') {
    errors.push('Username must be provided and must be a string.');
  }

  if (!password || typeof password !== 'string') {
    errors.push('Password must be provided and must be a string.');
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    next();
  }
};

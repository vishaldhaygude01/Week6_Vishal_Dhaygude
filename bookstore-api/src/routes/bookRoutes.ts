import { Router } from 'express';
import { getBooks, getBookById, createBook, updateBook, deleteBook } from '../controllers/bookController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', authMiddleware, roleMiddleware('admin'), createBook);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateBook);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteBook);

export default router;

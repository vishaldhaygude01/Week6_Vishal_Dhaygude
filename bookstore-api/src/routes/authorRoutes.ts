import { Router } from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/authorController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', getAuthors);
router.get('/:id', getAuthorById);
router.post('/', authMiddleware, roleMiddleware('admin'), createAuthor);
router.put('/:id', authMiddleware, roleMiddleware('admin'), updateAuthor);
router.delete('/:id', authMiddleware, roleMiddleware('admin'), deleteAuthor);

export default router;

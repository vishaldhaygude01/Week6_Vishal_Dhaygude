import { Sequelize } from 'sequelize';
import sequelize from '../config/database';
import Author from './author';
import Book from './book';
import User from './user';
import Review from './review';
import Rating from './rating';
import Payment from './payment';

Author.initModel(sequelize);
Book.initModel(sequelize);
User.initModel(sequelize);
Review.initModel(sequelize);
Rating.initModel(sequelize);
Payment.initModel(sequelize);

// Associations
Book.belongsToMany(Author, { through: 'BookAuthors' });
Author.belongsToMany(Book, { through: 'BookAuthors' });
Review.belongsTo(Book, { foreignKey: 'bookId' });
Review.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });
Rating.belongsTo(User, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });
Payment.belongsTo(Book, { foreignKey: 'bookId' });

export { sequelize, Author, Book, User, Review, Rating, Payment };

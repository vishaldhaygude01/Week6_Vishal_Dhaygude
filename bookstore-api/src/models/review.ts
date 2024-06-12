import { DataTypes, Model, Sequelize } from 'sequelize';

class Review extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public content!: string;

  public static initModel(sequelize: Sequelize) {
    Review.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Review',
    });
  }
}

export default Review;

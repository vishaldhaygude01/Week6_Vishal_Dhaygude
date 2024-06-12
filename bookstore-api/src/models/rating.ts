import { DataTypes, Model, Sequelize } from 'sequelize';

class Rating extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public rating!: number;

  public static initModel(sequelize: Sequelize) {
    Rating.init({
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
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'Rating',
    });
  }
}

export default Rating;

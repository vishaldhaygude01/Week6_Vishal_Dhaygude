import { DataTypes, Model, Sequelize } from 'sequelize';

class Book extends Model {
  public id!: number;
  public bookCode!: string;
  public title!: string;
  public description!: string;
  public publishedYear!: number;
  public price!: number;
  public externalId?: string;

  public static initModel(sequelize: Sequelize) {
    Book.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      bookCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      publishedYear: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      externalId: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize,
      modelName: 'Book',
    });
  }
}

export default Book;

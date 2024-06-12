import { DataTypes, Model, Sequelize } from 'sequelize';

class Payment extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  public status!: string;
  public createdAt!: Date;

  public static initModel(sequelize: Sequelize) {
    Payment.init({
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
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      sequelize,
      modelName: 'Payment',
    });
  }
}

export default Payment;

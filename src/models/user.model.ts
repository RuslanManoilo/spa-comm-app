import sequelize from "clients/SequelizeClient";
import { IPropCreatedAt, IPropUpdatedAt } from "interfaces/common.interface";
import { Optional } from "sequelize";
import { DataType, Model } from "sequelize-typescript";

export interface IUser extends IPropCreatedAt, IPropUpdatedAt {
  id: number;
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

interface IUserCreationAttributes extends Optional<IUser, "id"> {}

class User extends Model<IUser, IUserCreationAttributes> implements IUser {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public avatar?: string;
}

User.init(
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataType.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelize,
    tableName: "users",
  }
);

export default User;

import sequelize from "clients/SequelizeClient";
import { IPropCreatedAt, IPropUpdatedAt } from "interfaces/common.interface";
import { Optional } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import User from "./user.model";

export interface IComment extends IPropCreatedAt, IPropUpdatedAt {
  id: number;
  content: string;
  parentId: number;
  likeCount: number;
}

interface ICommentCreationAttributes extends Optional<IComment, "id"> {}

class Comment
  extends Model<IComment, ICommentCreationAttributes>
  implements IComment
{
  id!: number;
  content!: string;
  parentId!: number;
  likeCount!: number;
}

Comment.init(
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataType.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataType.INTEGER,
      allowNull: false,
    },
    likeCount: {
      type: DataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: sequelize,
    tableName: "comments",
  }
);

User.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(User, { foreignKey: "userId" });

Comment.hasMany(Comment, { foreignKey: "parentId", as: "replies" });
Comment.belongsTo(Comment, { foreignKey: "parentId", as: "parent" });

export default Comment;

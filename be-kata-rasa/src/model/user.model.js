import connection from "../database/connection";
import { DataTypes } from "sequelize";
import CategoryModel from "./category.model";

const UserModel = connection.define(
  "tbl_user",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.INTEGER,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false, tableName: "tbl_users", underscored: true }
);

export default UserModel;

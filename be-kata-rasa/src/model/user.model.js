import connection from "../database/connection";
import { DataTypes } from "sequelize";
import RoleModel from "./role.model";

const UserModel = connection.define(
  "Users",
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
    roleId: {
      type: DataTypes.INTEGER,
      references: { model: RoleModel, key: "id" },
    },
  },
  { tableName: "tbl_users", underscored: true }
);

export default UserModel;

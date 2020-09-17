import connection from "../database/connection";
import { DataTypes } from "sequelize";

const RoleModel = connection.define(
  "Role",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    roleCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tbl_role", underscored: true }
);

export default RoleModel;

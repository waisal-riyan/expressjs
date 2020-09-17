import connection from "../database/connection";
import { DataTypes } from "sequelize";

const CategoryModel = connection.define(
  "category",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tbl_categories", underscored: true }
);

export default CategoryModel;

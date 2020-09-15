import connection from "../database/connection";
import { DataTypes } from "sequelize";
import CategoryModel from "./category.model";

const ProductModel = connection.define(
  "product",
  {   
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    stock: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: { model: CategoryModel, key: "id" },
    },
  },
  { timestamps: false, tableName: "tbl_products", underscored: true }
);

export default ProductModel;

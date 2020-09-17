import connection from "../database/connection";
import { DataTypes } from "sequelize";

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
  },
  { timestamps: false, tableName: "tbl_products", underscored: true }
);

export default ProductModel;

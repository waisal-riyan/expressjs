import connection from "../database/connection";
import { DataTypes, Sequelize } from "sequelize";

const ProductDetailModel = connection.define(
  "ProductDetail",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    productInfo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    productDesc: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    images: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: "tbl_product_detail", underscored: true }
);

export default ProductDetailModel;

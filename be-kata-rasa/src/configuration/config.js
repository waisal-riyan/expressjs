import dotenv from "dotenv";
import UserModel from "../model/user.model";
import AddressModel from "../model/address.model";
import connection from "../database/connection";
import ProductModel from "../model/product.model";
import CategoryModel from "../model/category.model";

export default async function configure() {
  dotenv.config();
  UserModel.hasMany(AddressModel);
  CategoryModel.hasOne(ProductModel);
  ProductModel.belongsTo(CategoryModel);
  // await connection.sync({ force: true });
  if (!process.env.APP_NAME) {
    console.error(`Environment file (.env) cannot be found in the root folder`);
    process.exit(1);
  }
}

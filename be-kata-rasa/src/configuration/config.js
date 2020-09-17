import dotenv from "dotenv";
import UserModel from "../model/user.model";
import AddressModel from "../model/address.model";
import connection from "../database/connection";
import ProductModel from "../model/product.model";
import CategoryModel from "../model/category.model";
import RoleModel from "../model/role.model";
import ProductDetailModel from "../model/productDetail.model";

export default async function configure() {
  dotenv.config();
  /* user */
  UserModel.hasMany(AddressModel);
  AddressModel.belongsTo(UserModel);
  RoleModel.hasOne(UserModel);
  UserModel.belongsTo(RoleModel);
  /* produk */
  // CategoryModel.hasOne(ProductModel);
  ProductModel.belongsTo(CategoryModel);
  // ProductDetailModel.hasOne(ProductModel);
  ProductModel.belongsTo(ProductDetailModel);
  // RoleModel.create({ roleCode: "ADM", roleName: "admin" });
  // RoleModel.create({ roleCode: "CSM", roleName: "customer" });
  // await connection.sync({ force: true });
  if (!process.env.APP_NAME) {
    console.error(`Environment file (.env) cannot be found in the root folder`);
    process.exit(1);
  }
}

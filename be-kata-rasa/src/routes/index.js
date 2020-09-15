import express from "express";
import UserRoute from "./user.route";
import AuthRoute from "./auth.route";
import ProductRoute from "./product.route";
import AddressRoute from "./address.route";

export default express
  .Router()
  .use("/users", UserRoute)
  .use("/address", AddressRoute)
  .use("/auth", AuthRoute)
  .use("/products", ProductRoute);

import express from "express";
import EmployeeRouter from "./employee.route";
import AuthRouter from "./auth.route";
import {
  getToken,
  handleErrorJwt
} from '../configuration/jwt'

export default express
  .Router()
  .use("/auth", AuthRouter)
  .use(
    "/employee", getToken(),
    EmployeeRouter
  ).use(handleErrorJwt)
  .use((req, res, next) => {
    res.status(404).json({
      message: "Not Found."
    });
  });
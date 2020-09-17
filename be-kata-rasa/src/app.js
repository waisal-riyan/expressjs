import express, { Router } from "express";
import configure from "./configuration/config";
import connection from "./database/connection";
import AppRoutes from "./routes";
import AppMiddleware from "./middlewares/app-middleware";
import bodyParser from "body-parser";
import {} from 'express-fileupload'

try {
  const app = express();
  configure();
  connection.authenticate();
  console.log("Connection has been established successfully.");
  app.use(AppMiddleware);
  // app.use(express);
  // app.use(function (req, res, next) {
  //   var data = new Buffer("");
  //   req.on("data", function (chunk) {
  //     data = Buffer.concat([data, chunk]);
  //   });
  //   req.on("end", function () {
  //     req.rawBody = data;
  //     next();
  //   });
  // });
  app.use("/kata-rasa/api", AppRoutes);
  app.listen(process.env.APP_PORT, () => {
    console.log(
      `${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`
    );
  });
} catch (error) {
  console.error(error);
}

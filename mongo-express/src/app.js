import configure from "./configuration/config";
import express from "express";
import conns from "./database/connection";
import AppRouter from "./routes";
import AppMiddleware from "./middlewares/app-middleware";

configure();
const app = express();
app.use(AppMiddleware);
app.use(AppRouter);

conns.createMongoConnection((err, client) => {
  app.listen(process.env.APP_PORT, () => {
    console.log(
      `${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`
    );
  });

});
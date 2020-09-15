import express from "express";
import configure from "./configuration/config";
import connection from "./database/connection";
import AppRoutes from "./routes";
import AppMiddleware from "./middlewares/app-middleware";

try {
  const app = express();
  configure();
  connection.authenticate();
  console.log("Connection has been established successfully.");
  app.use(AppMiddleware);
  app.use("/kata-rasa/api", AppRoutes);
  app.listen(process.env.APP_PORT, () => {
    console.log(
      `${process.env.APP_NAME} listening on port ${process.env.APP_PORT}`
    );
  });
} catch (error) {
  console.error(error);
}

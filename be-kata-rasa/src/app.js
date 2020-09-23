import express, { Router } from "express";
import configure from "./configuration/config";
import connection from "./database/connection";
import AppRoutes from "./routes";
import AppMiddleware from "./middlewares/app-middleware";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

try {
  const app = express();
  configure();
  connection.authenticate();
  console.log("Connection has been established successfully.");
  app.use(
    fileUpload({
      createParentPath: false,
    })
  );
  app.use(cors());
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

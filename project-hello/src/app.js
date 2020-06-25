import configure from './config';
import express from "express";
import AppMiddleware from './middlewares/app-middleware';
import AppRouter from './routes';
import createDbConnection from "./database/connection";


createDbConnection(configure)
    .then((connection) => {
            if (connection.isConnected) {
                configure()
                const app = express();
                // app.use(function (req, res, next) {
                //     console.log(new Date());
                //     console.log(req.url);
                //     next();
                // });
                app.use(AppMiddleware);
                app.use(AppRouter);
                app.listen(process.env.APP_PORT, () => {
                    console.log(`${process.env.APP_NAME} listening on port ${process.env.APP_PORT}!`);
                });
            }
        }
    ).catch((error) => {
    console.error(`Error starting up server.`);
    console.error(error);
});


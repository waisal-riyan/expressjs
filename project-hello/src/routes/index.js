import express from 'express';
import ProductRouter from "./product.router";
import CategoryRouter from "./category.router";
import UserRouter from "./user.router";
import AuthRouter from "./auth.router";

export default express.Router()
// .use(function (req, res, next) {
//     if (req.session) {
//         next()
//     } else {
//         res.sendStatus(401);
//     }
// })
    .use('/product', ProductRouter)
    .use('/category', CategoryRouter)
    .use('/user', UserRouter)
    .use('/auth', AuthRouter)
    .use(function (req, res, next) {
        res.body = res.body + "modified";

        next();
    })
    .use((req, res, next) => {
        res.status(404).json({message: 'Not Found.'});
    });

import {
    Router
} from 'express'
import jwt from 'jsonwebtoken'
const AuthRouter = Router().post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = {
        id: 1,
        username: username
    };
    if (username === "waisal" && password === "123") {
        jwt.sign({
            user: user
        }, "secret_key", {
            expiresIn: '3600s'
        }, (err, token) => {
            res.json({
                token: token
            });
        });
    } else {
        res.status(400).json({
            message: "Invalid username / password"
        });
    }
})

export default AuthRouter;
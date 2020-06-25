import {Router} from "express";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

const AuthRouter = Router()
    .post('/', async (req, res) => {
        let user = {...req.body};
        const users = await new AuthService().doAuth(user);
        res.json(users);
    });

export default AuthRouter;
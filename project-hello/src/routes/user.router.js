import {Router} from "express";
import UserService from "../services/user.service";

const userService = new UserService();
const UserRouter = Router()
    .get('/', async (req, res) => {
        const users = await userService.findAllUser(req.query.skip, req.query.take);
        res.json(users);
    })
    .get('/:id', async (req, res) => {
        let users = null;
        if (req.params.id) {
            users = await userService.findUser(req.params.id);
        }
        res.json(users);
    }).post('/', async (req, res) => {
        let user = {...req.body};
        const users = await userService.createUser(user);

        res.json(users);
    });

export default UserRouter;
import { Router } from "express";
import UserService from "../services/user.service";
const userService = new UserService();

const UserRoute = Router()
  .get("/", async (req, res) => {
    const { limit, offset } = req.query;
    res.json(await userService.findAll(limit, offset));
  })
  .post("/", async (req, res) => {
    try {
      const response = await userService.createUser(req.body);
      res.json(response);
    } catch (error) {
      res.status(401).send({ error: error });
    }
  });
export default UserRoute;

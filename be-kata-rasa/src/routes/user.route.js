import { Router } from "express";
import UserService from "../services/user.service";
const userService = new UserService();

const UserRoute = Router().get("/", async (req, res) => {
  const { limit, offset } = req.query;
  res.json(await userService.findAll(limit, offset));
});
export default UserRoute;

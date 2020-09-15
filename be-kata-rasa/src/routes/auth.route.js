import { Router } from "express";
import UserService from "../services/user.service";
const userService = new UserService();
const AuthRoute = Router().post("/", async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.auth(email, password);
  res.json(response);
});
export default AuthRoute;

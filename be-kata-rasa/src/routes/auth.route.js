import { Router } from "express";
import UserService from "../services/user.service";
const userService = new UserService();
const AuthRoute = Router().post("/", async (req, res) => {
  const { email, password } = req.body;
  const response = await userService.auth(email, password);
  if (response === null) {
    res.json(
      {
        status: "data not found",
      },
      401
    );
  } else {
    res.json({
      data: response,
      status: 200,
    });
  }
});
export default AuthRoute;

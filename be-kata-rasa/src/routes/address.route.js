import { Router } from "express";
import UserService from "../services/user.service";
const userService = new UserService();

const AddressRoute = Router()
  .get("/:idUser", async (req, res) => {
    try {
      const { idUser } = req.params;
      res.json(await userService.getAddressByUser(idUser));
    } catch (error) {
      res.status(401).send(error);
    }
  })
  .post("/", async (req, res) => {
    try {
      const response = await userService.addAddress(req.body);
      res.json(response);
    } catch (error) {
      res.status(401).send({ error: error });
    }
  });
export default AddressRoute;

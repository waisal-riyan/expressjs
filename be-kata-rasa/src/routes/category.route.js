import { Router } from "express";
import CategoryService from "../services/category.service";
const categoryService = new CategoryService();

const CategoryRoute = Router()
  .get("/", async (req, res) => {
    try {
      res.json(await categoryService.getListCategory());
    } catch (error) {
      res.status(401).send(error);
    }
  })
  .put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      console.log("id", id);
      const response = await categoryService.update(req.body, id);
      res.json(response);
    } catch (error) {
      res.status(401).send({ error: error });
    }
  })
  .post("/", async (req, res) => {
    try {
      const response = await categoryService.create(req.body);
      res.json(response);
    } catch (error) {
      res.status(401).send({ error: error });
    }
  });
export default CategoryRoute;

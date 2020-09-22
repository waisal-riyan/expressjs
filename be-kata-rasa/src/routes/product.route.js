import { Router } from "express";
import ProductService from "../services/product.service";
import base64 from "base-64";
const productService = new ProductService();
const ProductRoute = Router()
  .get("/", async (req, res) => {
    const { limit, offset, orderBy, value } = req.query;
    if (limit === undefined && offset === undefined) {
      res.json(await productService.getListProduct());
    } else {
      res.json({
        data: await productService.findPaginate(limit, offset, orderBy, value),
        length: await productService.countProducts(),
      });
    }
  })
  .post("/upload", async (req, res) => {
    try {
      let respon = await productService.uploadImage(req.files.image);
      res.json(respon);
    } catch (error) {
      res.status(401).json(error);
    }
  })
  .post("/preview", async (req, res) => {
    let preview = await productService.getPreview(req.body.name);
    res.status(200).json(preview);
  })
  .post("/", async (req, res) => {
    try {
      const respon = await productService.create(req.body);
      res.json(respon);
    } catch (error) {
      res.status(401).json(error);
    }
  })
  .get("/:productName", async (req, res) => {
    const { productName } = req.params;
    res.json(await productService.getProductByName(productName));
  });
export default ProductRoute;

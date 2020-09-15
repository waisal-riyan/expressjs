import { Router } from "express";
import ProductService from "../services/product.service";
const productService = new ProductService();
const ProductRoute = Router()
  .get("/", async (req, res) => {
    const { limit, offset ,orderBy,value} = req.query;
    if (limit === undefined && offset === undefined) {
      res.json(await productService.getListProduct());
    } else {
      res.json({
        data: await productService.findPaginate(limit, offset,orderBy,value),
        length: await await productService.countProducts(),
      });
    }
  })
  .post("/", async (req, res) => {
    res.json(await productService.create(req.body));
  })
  .get("/:productName", async (req, res) => {
    const { productName } = req.params;
    res.json(await productService.getProductByName(productName));
  });
export default ProductRoute;

import { Router } from "express";
import ProductService from "../services/product.service";
import base64 from "base-64";
const productService = new ProductService();
const ProductRoute = Router()
  .get("/", async (req, res, next) => {
    const { limit, offset, orderBy, value, categoryId } = req.query;
    if (categoryId !== undefined) {
      next();
    } else {
      if (limit === undefined && offset === undefined) {
        res.json(await productService.getListProduct());
      } else {
        res.json({
          data: await productService.findPaginate(
            limit,
            offset,
            orderBy,
            value
          ),
          length: await productService.countProducts(),
        });
      }
    }
  })
  .get("/", async (req, res) => {
    try {
      const { categoryId } = req.query;
      let response = await productService.getProductByCategory(categoryId);

      response.map(({ dataValues }) => {
        // console.log(
        //   " dataValues.ProductDetail.dataValues.images",
        //   dataValues.ProductDetail.dataValues.images
        // );

        dataValues.ProductDetail.dataValues.images = base64
          .decode(dataValues.ProductDetail.dataValues.images)
          .split(",");
      });
      res.json(response);
    } catch (error) {
      res.status(401).json(error);
    }
  })
  .post("/upload", async (req, res) => {
    try {
      let respon = await productService.uploadImage(req.files.image);
      res.send(respon);
    } catch (error) {
      res.status(401).json(error);
    }
  })
  .post("/preview", async (req, res) => {
    console.log("req.body.name", req.body.name);
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
  .get("/:param", async (req, res, next) => {
    try {
      const { param } = req.params;
      let result;
      if (Number(param)) {
        result = await (await productService.getProductById(param)).toJSON();
        result.ProductDetail.images = base64
          .decode(result.ProductDetail.images)
          .split(",");
      } else {
        result = await productService.getProductByName(param);
      }
      res.json(result);
    } catch (error) {
      res.status(401).json(error);
    }
  });
export default ProductRoute;

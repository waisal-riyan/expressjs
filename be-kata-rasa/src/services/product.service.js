import ProductRepository from "../repositories/product.repository";
import ProductDetailRepository from "../repositories/productDetail.repository";
import fs from "fs";
import dropboxV2Api from "dropbox-v2-api";
import fetch from "isomorphic-fetch";
import { Dropbox } from "dropbox";
const productDetailRepository = new ProductDetailRepository();

class ProductService {
  productService() {
    return new ProductRepository();
  }

  async findPaginate(limit, offset, orderBy, value) {
    return await this.productService().findProductsPaginate(
      limit,
      offset,
      orderBy,
      value
    );
  }

  async uploadImage(image) {
    console.log("ProductService -> uploadImage -> image");
    const dbx = new Dropbox({
      accessToken:
        "mKiD7Jf8z04AAAAAAAAAAbxUK1ooFf5VcuZ12vseeU1FGPHHjn5hSOOG6ct_OqPm",
      fetch: fetch,
    });
    //
    // console.log(
    //   "ProductService -> uploadImage -> image",
    //   new Buffer(image, "binary").toString("utf-8")
    // );
    let respon = "";
    await fetch("https://content.dropboxapi.com/2/files/upload", {
      headers: {
        Authorization:
          "Bearer mKiD7Jf8z04AAAAAAAAAAbxUK1ooFf5VcuZ12vseeU1FGPHHjn5hSOOG6ct_OqPm",
        "Dropbox-API-Arg":
          '{"path": "/kata-rasa/11.png","mode": "add","autorename": true,"mute": false,"strict_conflict": false}',
        "Content-Type": "application/octet-stream",
      },
      method: "POST",
      body: image,
    })
      .then((response) => response.text())
      .then((result) => (respon = image))
      .catch((error) => console.log("error", error));
    return respon;
  }

  async countProducts() {
    return await this.productService().count();
  }

  async getListProduct() {
    return await this.productService().findAll();
  }

  async create(product) {
    const {
      productInfo,
      productDesc,
      images,
      productName,
      price,
      stock,
      categoryId,
    } = product;
    let productDetail = await productDetailRepository.create({
        productInfo: productInfo,
        productDesc: productDesc,
        images: images,
      }),
      newProduct = {
        productName: productName,
        price: price,
        stock: stock,
        categoryId: categoryId,
        ProductDetail: productDetail.getDataValue("id"),
        ProductDetailId: productDetail.getDataValue("id"),
      };
    return await this.productService().create(newProduct);
  }

  async getProductByName(productName) {
    return await this.productService().findByName(productName);
  }
}

export default ProductService;

import ProductRepository from "../repositories/product.repository";
import ProductDetailRepository from "../repositories/productDetail.repository";
import fetch from "isomorphic-fetch";
import { Dropbox } from "dropbox";
import base64 from "base-64";
const productDetailRepository = new ProductDetailRepository();

const dbx = new Dropbox({
  accessToken:
    "mKiD7Jf8z04AAAAAAAAAAbxUK1ooFf5VcuZ12vseeU1FGPHHjn5hSOOG6ct_OqPm",
  fetch: fetch,
});
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
    let respon = [];
    if (image.length === undefined) {
      await dbx
        .filesUpload({
          path: `/kata-rasa/${image.name}`,
          contents: image.data,
        })
        .then((res) => res)
        .catch((err) => err);
      respon.push(await this.getPreview(image.name));
    } else {
      let imgs = await Promise.all(
        image.map(
          async (img) =>
            await dbx
              .filesUpload({
                path: `/kata-rasa/${img.name}`,
                contents: img.data,
              })
              .then((res) => res)
        )
      );

      respon = await Promise.all(
        imgs.map(async (img) => await this.getPreview(img.name))
      );
    }

    return base64.encode(respon);
  }

  async getPreview(name) {
    let link = "";
    var requestOptions = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer 2Pn7QhimQ1AAAAAAAAAAAcJY7Bh5fsG3Qi3YsumAgg0hympo42GJxgKMw0-NXCMu",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ path: `/kata-rasa/${name}` }),
      redirect: "follow",
    };

    await fetch(
      "https://api.dropboxapi.com/2/files/get_temporary_link",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (link = result.link))
      .catch((error) => console.log("error", error));
    return link;
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

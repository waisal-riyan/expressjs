import ProductRepository from "../repositories/product.repository";

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
  async countProducts() {
    return await this.productService().count();
  }

  async getListProduct() {
    return await this.productService().findAll();
  }

  async create(product) {
    return await this.productService().create(product);
  }

  async getProductByName(productName) {
    return await this.productService().findByName(productName);
  }
}

export default ProductService;

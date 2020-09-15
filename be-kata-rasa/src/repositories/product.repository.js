import ProductModel from "../model/product.model";
import CategoryModel from "../model/category.model";

class ProductRepository {
  productRepository() {
    return ProductModel;
  }
  async findProductsPaginate(limit = 5, offset = 1, orderBy, value) {
    return await this.productRepository().findAll({
      include: [CategoryModel],
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }
  async count() {
    return await this.productRepository().count();
  }

  async findAll() {
    return await this.productRepository().findAll({ include: [CategoryModel] });
  }

  async findByName(productName) {
    return await this.productRepository().findOne({
      where: { productName: productName },
      include: [CategoryModel],
    });
  }
  async create(product) {
    return await this.productRepository().create(product);
  }
}

export default ProductRepository;

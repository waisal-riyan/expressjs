import ProductModel from "../model/product.model";
import CategoryModel from "../model/category.model";
import ProductDetailModel from "../model/productDetail.model";

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
    return await this.productRepository().findAll({
      include: [CategoryModel, ProductDetailModel],
    });
  }
  async findById(id) {
    return await this.productRepository().findOne({
      where: { id: id },
      include: [CategoryModel, ProductDetailModel],
    });
  }

  async findByCategoryId(id) {
    return await this.productRepository().findAll({
      where: {
        categoryId: id,
      },
      include: [CategoryModel, ProductDetailModel],
    });
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

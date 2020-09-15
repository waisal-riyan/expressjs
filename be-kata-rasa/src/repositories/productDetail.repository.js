import ProductDetailModel from "../model/productDetail.model";

class ProductDetailRepository {
  productDetailRepository() {
    return ProductDetailModel;
  }
  async findProductDetailsPaginate(limit, offset, orderBy, value) {
    return await this.productDetailRepository().findAll({
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }

  async count() {
    return await this.productDetailRepository().count();
  }

  async findAll() {
    return await this.productDetailRepository().findAll({
      include: [CategoryModel],
    });
  }

  async findById(id) {
    return await this.productDetailRepository().findOne({
      where: { id: id },
    });
  }
  async create(productDetail) {
    return await this.productDetailRepository().create(productDetail);
  }
}

export default ProductDetailRepository;

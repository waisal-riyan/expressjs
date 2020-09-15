import ProductModel from "../model/product.model";
import CategoryModel from "../model/category.model";

class CategoryRepository {
  categoryRepository() {
    return CategoryModel;
  }
  async findProductsPaginate(limit = 10, offset = 1, orderBy, value) {
    return await this.categoryRepository().findAll({
      limit: Number(limit),
      offset: Number(offset * limit),
      order: [[orderBy, value]],
    });
  }
  async count() {
    return await this.categoryRepository().count();
  }

  async findAll() {
    return await this.categoryRepository().findAll();
  }

  async findById(categoryId) {
    return await this.categoryRepository().findOne({
      where: { id: categoryId },
    });
  }
  async create(product) {
    return await this.categoryRepository().create(product);
  }
}

export default CategoryRepository;

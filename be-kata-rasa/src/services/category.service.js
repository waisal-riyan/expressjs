import CategoryRepository from "../repositories/category.repository";
class CategoryService {
  categoryService() {
    return new CategoryRepository();
  }

  async findPaginate(limit, offset, orderBy, value) {
    return await this.categoryService().findCategorysPaginate(
      limit,
      offset,
      orderBy,
      value
    );
  }

  async getListCategory() {
    return await this.categoryService().findAll();
  }

  async create(category) {
    return await this.categoryService().create(category);
  }
  async update(category, id) {
    return await this.categoryService().update(category, id);
  }
}

export default CategoryService;

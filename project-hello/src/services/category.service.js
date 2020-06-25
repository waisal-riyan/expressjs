import CategoryRepository from "../repository/category.repository";

export default class CategoryService {
    getAllCategory() {
        return new CategoryRepository().findAllCategory();
    }

    getAllCategoryProduct() {
        return new CategoryRepository().findAllCategoryProduct();
    }

    getCategoryById(id) {
        return new CategoryRepository().findOne(id);
    }

    createCategory(category) {
        return new CategoryRepository().createCategory(product);
    }
}
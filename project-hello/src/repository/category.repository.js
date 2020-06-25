import {getRepository} from "typeorm";
import CategorySchema from "../entities/category.schema";

export default class CategoryRepository {
    categoryRepository() {
        return getRepository(CategorySchema);
    }

    async findOne(id) {
        const category = await this.categoryRepository().find({where: {id: id}}, {relations: ['product']});
        return category;
    }

    async findAllCategory() {
        const category = await this.categoryRepository().find();
        return category;
    }

    async findAllCategoryProduct() {
        const category = await this.categoryRepository().find({relations: ['product']});
        return category;
    }

    async createCategory(category) {
        return await this.categoryRepository().save(category);
    }
}
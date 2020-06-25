import {getConnection, getRepository} from "typeorm";
import ProductSchema from "../entities/product.schema";

export default class ProductRepository {
    productRepository() {
        return getRepository(ProductSchema);
    }

    async findOne(id) {
        const product = await this.productRepository().find({where: {id: id}}, {relations: ['category']});
        return product;
    }

    async findAllProduct() {
        const product = await this.productRepository().find({relations: ['category']});
        return product;
    }

    async createProduct(product) {
        return await this.productRepository().save(product);
    }

    async findAllProductCustom(selectItem, whereItem, orderItem, relationName) {
        let relations = relationName;
        const product = await this.productRepository().find(
            {
                select: selectItem,
                where: whereItem,
                order: orderItem,
                relations: relations
            }
        );
        return product;
    }

    async updateProduct(id, product) {
        return await getConnection()
            .createQueryBuilder()
            .update(Product)
            .set(product)
            .where("id = :id", {id: id})
            .execute();
    }
}
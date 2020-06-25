import {EntitySchema} from "typeorm";
import Product from "../models/product.model";

const ProductSchema = new EntitySchema({
    name: 'Product',
    target: Product,
    tableName: 'master_product',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        productId: {
            name: 'product_id',
            type: 'varchar'
        },
        price: {
            name: 'price',
            type: 'int'
        },
        productName: {
            name: 'product_name',
            type: 'varchar'
        }
    },
    relations: {
        category: {
            target: 'Category',
            type: 'many-to-one',
            eager:true,
            joinColumn: {name: 'category_id'}
        }
    }
});
export default ProductSchema
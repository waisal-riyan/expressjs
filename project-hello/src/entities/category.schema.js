import {EntitySchema} from "typeorm";
import Category from "../models/category.model";

const CategorySchema = new EntitySchema({
    name: 'Category',
    target: Category,
    tableName: 'master_category',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        categoryId: {
            name: 'category_id',
            type: 'varchar'
        },
        categoryName: {
            name: 'category_name',
            type: 'varchar'
        }
    },
    relations: {
        product: {
            target: 'Product',
            type: 'one-to-many',
            inverseSide: 'category',
        }
    }
});
export default CategorySchema
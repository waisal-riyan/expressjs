import {Router} from 'express';
import ProductService from "../services/product.service";
import CategoryService from "../services/category.service";

const CategoryRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new CategoryService().getAllCategory();
        res.json(rows)
    })
    .get('/with-product', async (req, res, next) => {
        const rows = await new CategoryService().getAllCategoryProduct();
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const category = {...req.body};
        const result = await new CategoryService().createProduct(category);
        res.json(result)
    });

export default CategoryRouter;
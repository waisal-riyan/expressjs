import {Router} from 'express';
import ProductService from "../services/product.service";

const ProductRouter = Router()
    .get('/', async (req, res, next) => {
        const rows = await new ProductService().getAllProduct();
        res.json(rows)
    })
    .get('/custom', async (req, res, next) => {
        // localhost:3006/product/custom?
        // queryParams={"selectItem":["productId","productName"],
        // "whereItem":{"id":1},
        // "orderItem":{"price":"DESC"},
        // "relationName":["category"]}

        const queryParams = req.query.queryParams;
        const rows = await new ProductService().getAllProductCustom(queryParams);
        res.json(rows)
    })
    .post('/', async (req, res, next) => {
        const product = {...req.body};
        const result = await new ProductService().createProduct(product);
        res.json(result)
    })
    .put('/', async (req, res) => {
        const {id, ...product} = req.body;
        const result = await new ProductService().updateProduct(id, product);
        res.json(result)
    });

export default ProductRouter;
import ProductRepository from "../repository/product.repository";

export default class ProductService {
    getAllProduct() {
        return new ProductRepository().findAllProduct();
    }

    getAllProductCustom(queryParams) {
        const parm = JSON.parse(queryParams);
        return new ProductRepository().findAllProductCustom(parm.selectItem, parm.whereItem, parm.orderItem, parm.relationName);
    }

    getProductById(id) {
        return new ProductRepository().findProductById(id);
    }

    createProduct(product) {
        return new ProductRepository().createProduct(product);
    }

    updateProduct(id, product) {
        return new ProductRepository().updateProduct(id, product);
    }
}
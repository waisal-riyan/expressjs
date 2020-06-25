import mysql from 'mysql';
import {
    createConnection
} from "typeorm";
import ProductSchema from "../entities/product.schema";
import CategorySchema from "../entities/category.schema";
import UserSchema from "../entities/user.schema";
import UserInfoSchema from "../entities/userInfo.schema";


const createDbConnection = async (config) => {
    const {
        dbType,
        dbHost,
        dbPort,
        dbUser,
        dbPassword,
        dbName
    } = config();
    const connection = await createConnection({
        type: dbType || 'mysql',
        host: dbHost || 'localhost',
        port: dbPort || 3306,
        username: dbUser || 'root',
        password: dbPassword || '',
        database: dbName || 'db_hello',
        debug: true,
        entities: [ProductSchema, CategorySchema, UserSchema, UserInfoSchema],
    });

    return connection;
};

export default createDbConnection;
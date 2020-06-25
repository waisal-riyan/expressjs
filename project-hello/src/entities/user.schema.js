import User from "../models/User.model";
import {EntitySchema} from "typeorm";

const UserSchema = new EntitySchema({
    name: 'User',
    target: User,
    tableName: 'master_user',
    columns: {
        userId: {
            primary: true,
            type: 'int',
            generated: true,
            name: 'user_id'
        },
        userName: {
            name: 'user_name',
            type: 'varchar'
        },
        userPassword: {
            name: 'user_password',
            type: 'varchar'
        },
        userFullName: {
            name: 'user_full_name',
            type: 'varchar'
        }
    },
    relations: {
        userInfo: {
            target: 'UserInfo',
            type: 'one-to-one',
            cascade: true,
            // eager:true,
            joinColumn: {name: 'user_info_id'}
        }
    }
});
export default UserSchema

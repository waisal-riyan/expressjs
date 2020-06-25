import UserInfo from "../models/UserInfo.model";
import {EntitySchema} from "typeorm";

const UserInfoSchema = new EntitySchema({
    name: 'UserInfo',
    target: UserInfo,
    tableName: 'master_user_info',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        address: {
            type: 'varchar'
        },
        phoneNo: {
            name: 'phone_no',
            type: 'varchar'
        }
    }
});
export default UserInfoSchema

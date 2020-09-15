import connection from "../database/connection";
import { DataTypes } from "sequelize";
import UserModel from "./user.model";

const AddressModel = connection.define(
  "Address",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    addressAs: {
      type: DataTypes.STRING,
    },
    receiverName: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.DATE,
    },
    mobilePhoneNumber: {
      type: DataTypes.INTEGER,
    },
    province: {
      type: DataTypes.INTEGER,
    },
    districtCity: {
      type: DataTypes.INTEGER,
    },
    subDistrict: {
      type: DataTypes.INTEGER,
    },
    postalCode: {
      type: DataTypes.STRING,
    },
    completeAddress: {
      type: DataTypes.TEXT,
    },
    primary: {
      type: DataTypes.TINYINT,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   references: { model: UserModel, key: "id" },
    // },
  },
  {
    timestamps: false,
    tableName: "tbl_address_customer",
    underscored: true,
  }
);

export default AddressModel;

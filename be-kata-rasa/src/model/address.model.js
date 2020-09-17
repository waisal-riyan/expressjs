import connection from "../database/connection";
import { DataTypes } from "sequelize";
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
      allowNull: false,
    },
    receiverName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobilePhoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    districtCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    subDistrict: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completeAddress: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    primary: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "tbl_address_customer",
    underscored: true,
  }
);

export default AddressModel;

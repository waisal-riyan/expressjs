import { Sequelize } from "sequelize";
const connection = new Sequelize("kata-rasa", "root", "TarunaEureka20", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  define: {
    freezeTableName: true,
  },
});

export default connection;

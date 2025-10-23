import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,       // nome do banco
  process.env.DB_USER,       // usuário
  process.env.DB_PASSWORD,   // senha
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,          // true se quiser ver os logs SQL
  }
);

export default sequelize;

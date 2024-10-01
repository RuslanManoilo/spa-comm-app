import { $env } from "../config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  database: $env.POSTGRES_DB,
  host: $env.POSTGRES_HOST,
  port: Number($env.POSTGRESS_PORT),
  username: $env.POSTGRES_USER,
  password: $env.POSTGRESS_PASSWORD,
});

export default sequelize;

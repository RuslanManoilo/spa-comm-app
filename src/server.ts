import sequelize from "./clients/SequelizeClient";
import app from "./app";
import { $env } from "./config";

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connection successfully.");

    const server = app.listen($env.PORT, () => {
      console.log(
        `App listering on the port ${$env.PORT}. ENV: ${$env.NODE_ENV}`
      );
    });

    server.setTimeout(180000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

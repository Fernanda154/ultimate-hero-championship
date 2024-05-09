import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { join } from 'path';

const options: DataSourceOptions & SeederOptions= {
  type: "postgres",
  host: "127.0.0.1",
  port: 5433,
  username: "postgres",
  password: "admin",
  database: "UHC",
  entities: ["src/entities/*.ts"],
  migrations: ["src/database/migrations/*.ts"],
};
export const AppDataSource = new DataSource(options);
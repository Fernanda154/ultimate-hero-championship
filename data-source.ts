import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
import { join } from 'path';

const options: DataSourceOptions & SeederOptions= {
  type: "postgres",
  host: "127.0.0.1",
  port: 5433,
  username: "postgres",
  password: "admin",
  database: "superhero",
  entities: [join(__dirname, "entities", "*.{ts,js}")],
  seeds: ["src/database/seeds/**/*{.ts,.js}"],
  seedTracking: false,
  migrations: [join(__dirname, "database", "migrations", "*.{ts,js}")],
};
export const AppDataSource = new DataSource(options);
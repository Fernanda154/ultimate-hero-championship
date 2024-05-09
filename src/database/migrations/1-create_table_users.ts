import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUsers1715217509954 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "user",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                {
                  name: "name",
                  type: "varchar",
                },
                {
                  name: "email",
                  type: "varchar",
                },
                {
                  name: "password",
                  type: "varchar",
                },
                {
                    name: "biography",
                    type: "varchar",
                },
                {
                    name: "photo",
                    type: "varchar",
                },
                {
                    name: "cpf",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },

              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

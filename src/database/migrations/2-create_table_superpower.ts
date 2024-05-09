import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableSuperpower1715217576682 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "superpower",
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
                  name: "value",
                  type: "int",
                },
              ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

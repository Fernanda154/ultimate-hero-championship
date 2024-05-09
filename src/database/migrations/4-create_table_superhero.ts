import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableSuperhero1715217617708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "superhero",
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
                  name: "attributeId",
                  type: "int"
                },
                {
                  name: "superPowerId",
                  type: "int"
                },
              ],
            })
        );
        await queryRunner.createForeignKey(
          "superhero",
          new TableForeignKey({
              columnNames: ["attributeId"],
              referencedColumnNames: ["id"],
              referencedTableName: "attribute",
              onDelete: "SET NULL",
          })
        );
        await queryRunner.createForeignKey(
          "superhero",
          new TableForeignKey({
              columnNames: ["superPowerId"],
              referencedColumnNames: ["id"],
              referencedTableName: "superpower",
              onDelete: "SET NULL",
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

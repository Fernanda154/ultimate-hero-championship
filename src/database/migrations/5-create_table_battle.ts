import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTableBattle1715217630731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'battle',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'winner_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'hero1_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'power_hero1',
                    type: 'int'
                },
                {
                    name: 'hero2_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'power_hero2',
                    type: 'int'
                }
            ]
        }));
       await queryRunner.createForeignKey('battle', new TableForeignKey({
            columnNames: ['winner_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'superhero',
            onDelete: 'CASCADE'
        }));

        await queryRunner.createForeignKey('battle', new TableForeignKey({
            columnNames: ['hero1_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'superhero',
            onDelete: 'CASCADE'
        }));

        await queryRunner.createForeignKey('battle', new TableForeignKey({
            columnNames: ['hero2_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'superhero',
            onDelete: 'CASCADE'
        }));
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

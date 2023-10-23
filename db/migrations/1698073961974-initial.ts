import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1698073961974 implements MigrationInterface {
    name = 'Initial1698073961974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "presensi" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "time" varchar NOT NULL, "date" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "presensi"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class  $FOR1707854135492 implements MigrationInterface {
    name = ' $FOR1707854135492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" ADD "englishSkillResult" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "englishSkillGrade" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "englishSkillDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "englishSkillBy" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "englishSkillBy"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "englishSkillDate"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "englishSkillGrade"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "englishSkillResult"`);
    }

}

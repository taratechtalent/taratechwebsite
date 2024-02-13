import { MigrationInterface, QueryRunner } from "typeorm";

export class  $FOR1707855098338 implements MigrationInterface {
    name = ' $FOR1707855098338'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalTheoricalSkillResult" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalTheoricalSkillGrade" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalTheoricalSkillDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalTheoricalSkillBy" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalPracticalSkillResult" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalPracticalSkillGrade" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalPracticalSkillDate" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "technicalPracticalSkillBy" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalPracticalSkillBy"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalPracticalSkillDate"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalPracticalSkillGrade"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalPracticalSkillResult"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalTheoricalSkillBy"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalTheoricalSkillDate"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalTheoricalSkillGrade"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "technicalTheoricalSkillResult"`);
    }

}

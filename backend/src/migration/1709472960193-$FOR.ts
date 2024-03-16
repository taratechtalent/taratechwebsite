import { MigrationInterface, QueryRunner } from "typeorm";

export class  $FOR1709472960193 implements MigrationInterface {
    name = ' $FOR1709472960193'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "linkedIn"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "yearsOfExperience"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "jobInterest"`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "service" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "primary_job_interest" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "level" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "linked_in" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "years_of_experience" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "remote_experience" boolean`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_request_date" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_request_deadline" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_by" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_link" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_result" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "english_video_email" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_email"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_result"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_link"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_by"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_request_deadline"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "english_video_request_date"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "remote_experience"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "years_of_experience"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "linked_in"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "level"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "primary_job_interest"`);
        await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "service"`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "jobInterest" character varying`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "yearsOfExperience" integer NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "talent" ADD "linkedIn" character varying`);
    }

}

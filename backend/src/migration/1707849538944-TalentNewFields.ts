import { MigrationInterface, QueryRunner } from 'typeorm';

export class TalentNewFields1707849538944 implements MigrationInterface {
  name = 'TalentNewFields1707849538944';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "phone" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "yearsOfExperience" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "jobInterest" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "skills" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "title" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ALTER COLUMN "linkedIn" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ALTER COLUMN "description" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "talent" ALTER COLUMN "description" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ALTER COLUMN "linkedIn" SET NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "title"`);
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "skills"`);
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "jobInterest"`);
    await queryRunner.query(
      `ALTER TABLE "talent" DROP COLUMN "yearsOfExperience"`,
    );
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "phone"`);
  }
}

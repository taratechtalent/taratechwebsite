import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateTalent1704821591505 implements MigrationInterface {
  name = ' UpdateTalent1704821591505';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "linkedIn" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "talent" ADD "description" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "description"`);
    await queryRunner.query(`ALTER TABLE "talent" DROP COLUMN "linkedIn"`);
  }
}

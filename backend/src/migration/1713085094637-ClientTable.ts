import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientTable1713085094637 implements MigrationInterface {
  name = 'ClientTable1713085094637';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "client" ("email" character varying NOT NULL, "name" character varying NOT NULL, "company" character varying NOT NULL, "position" character varying, "description" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_6293da38f0cd82179891e274d5f" PRIMARY KEY ("email"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "client_entity"`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientRequestTable1713094706891 implements MigrationInterface {
  name = 'ClientRequestTable1713094706891';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "client_request" ("uuid" SERIAL NOT NULL, "status" character varying DEFAULT 'open', "request" character varying, "result" character varying, "finish_date" TIMESTAMP WITH TIME ZONE, "talents" character varying, "meeting_date" TIMESTAMP WITH TIME ZONE, "meeting_description" character varying, "meeting_date_second" TIMESTAMP WITH TIME ZONE, "meeting_description_second" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "clientEmail" character varying, CONSTRAINT "PK_ce4f8926c93f60ea69cbee705ae" PRIMARY KEY ("uuid"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "client_request" ADD CONSTRAINT "FK_98da54075bae1f4bc55c5b7e7fd" FOREIGN KEY ("clientEmail") REFERENCES "client"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "client_request" DROP CONSTRAINT "FK_98da54075bae1f4bc55c5b7e7fd"`,
    );
    await queryRunner.query(`DROP TABLE "client_request"`);
  }
}

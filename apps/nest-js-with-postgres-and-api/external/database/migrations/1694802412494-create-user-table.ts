import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1694802412494 implements MigrationInterface {
  name = 'Migration1694802412494';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" 
      (
        "id" SERIAL NOT NULL, 
        "name" character varying(255) NOT NULL, 
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        "deleted_at" TIMESTAMP WITH TIME ZONE, 
        "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), 
        CONSTRAINT "PK_user" PRIMARY KEY ("id")); 
        COMMENT ON COLUMN "user"."name" IS 'Name of user'; 
        COMMENT ON COLUMN "user"."created_at" IS 'Record when user has been created'; 
        COMMENT ON COLUMN "user"."deleted_at" IS 'Record when user has been deleted'; 
        COMMENT ON COLUMN "user"."updated_at" IS 'Record when user has been updated'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

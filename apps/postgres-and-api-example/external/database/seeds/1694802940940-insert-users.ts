import { MigrationInterface, QueryRunner } from 'typeorm';

import { UserEntityTypeorm } from '@apps/postgres-and-api-example/user/infrastructure/database/typeorm/entities/user.entity';

export class Seed1694802940940 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into(UserEntityTypeorm)
      .values([
        { name: 'Jhon' },
        { name: 'Mary' },
        { name: 'Jose' },
        { name: 'Maria' },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(UserEntityTypeorm)
      .where([
        { name: 'Jhon' },
        { name: 'Mary' },
        { name: 'Jose' },
        { name: 'Maria' },
      ])
      .execute();
  }
}

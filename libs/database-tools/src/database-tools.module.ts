import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseType } from 'typeorm';

import { DatabaseTypeORMModule } from '@libs/database-tools/infrastructure/database-typeorm.module';

@Module({})
export class DatabaseModule {
  public static forRoot(type: unknown): DynamicModule {
    return {
      imports: [DatabaseTypeORMModule.forRoot(type as DatabaseType)],
      module: DatabaseModule,
    };
  }
}

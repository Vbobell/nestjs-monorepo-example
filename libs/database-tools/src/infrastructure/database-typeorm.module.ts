import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseType } from 'typeorm';

import { DatabaseConfig } from '@libs/database-tools/domain/database.config';

@Module({})
export class DatabaseTypeORMModule {
  public static forRoot(type: DatabaseType): DynamicModule {
    return {
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
            const databaseConfig =
              configService.get<DatabaseConfig<DatabaseType>>('database');

            return {
              autoLoadEntities: true,
              synchronize: databaseConfig?.synchronize,
              type,
              url: databaseConfig?.url,
            };
          },
        }),
      ],
      module: DatabaseTypeORMModule,
    };
  }
}

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ORM_CONFIG } from './environment';

const TYPE = 'postgres';
const modules = [];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...ORM_CONFIG,
        type: TYPE,
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ...modules,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'
import { SuperHeroModule } from './super_hero/super_hero.module';
import { AttributeModule } from './attribute/attribute.module';
import { SuperpowerModule } from './superpower/superpower.module';
import { BattleModule } from './battle/battle.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      migrations: [__dirname + '/database/migrations/*{.js,.ts}'],
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    SuperHeroModule,
    AttributeModule,
    SuperpowerModule,
    BattleModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

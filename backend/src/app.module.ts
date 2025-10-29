/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('PGHOST'),
        username: configService.get<string>('PGUSER'),
        password: configService.get<string>('PGPASSWORD'),
        database: configService.get<string>('PGDATABASE'),
        ssl:
          configService.get<string>('PGSSLMODE') === 'require'
            ? { rejectUnauthorized: false }
            : false,
        channelBinding:
          configService.get<string>('PGCHANNELBINDING') === 'require'
            ? 'require'
            : 'disable',
        autoLoadEntities: true,
        synchronize: false,
        logging: ['query', 'error'],
      }),
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UserModule } from './users/user.modules';
import {Module, OnModuleInit} from '@nestjs/common';
import {SeederService} from "./seeder.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const username = configService.get<string>('POSTGRES_USER');
        const password = configService.get<string>('POSTGRES_PASSWORD');
        const database = configService.get<string>('POSTGRES_DB');
        return {
          type: 'postgres',
          host: 'db',
          port: 5432,
          username,
          password,
          database,
          entities: [User],
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([User]),
    UserModule,
  ],
  providers: [SeederService],

})
export class AppModule implements OnModuleInit {
  constructor(private readonly seederService: SeederService) {}

  async onModuleInit() {
    await this.seederService.seed();
  }
}
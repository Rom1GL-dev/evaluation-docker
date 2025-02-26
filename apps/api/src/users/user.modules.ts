import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import {SeederService} from "../seeder.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService, SeederService],
    controllers: [UserController],
})
export class UserModule {}

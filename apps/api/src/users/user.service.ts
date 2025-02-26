import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser(name: string, email: string, password: string) {
        const user = this.userRepository.create({ name, email, password });
        return this.userRepository.save(user);
    }

    async getUsers() {
        return this.userRepository.find();
    }
}

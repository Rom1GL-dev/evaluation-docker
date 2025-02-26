import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {User} from "./users/user.entity";

@Injectable()
export class SeederService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async seed() {
        const userCount = await this.userRepository.count();
        if (userCount === 0) {
            const defaultUsers = this.userRepository.create([
                { name: 'Utilisateur 1', email: 'utilisateur1@example.com', password: 'motdepasse' },
                { name: 'Utilisateur 2', email: 'utilisateur2@example.com', password: 'motdepasse' },
                { name: 'Utilisateur 3', email: 'utilisateur3@example.com', password: 'motdepasse' },
                { name: 'Utilisateur 4', email: 'utilisateur4@example.com', password: 'motdepasse' },
                { name: 'Utilisateur 5', email: 'utilisateur5@example.com', password: 'motdepasse' },
            ]);
            await this.userRepository.save(defaultUsers);
        }
    }
}

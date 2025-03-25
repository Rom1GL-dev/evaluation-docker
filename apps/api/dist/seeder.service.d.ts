import { Repository } from 'typeorm';
import { User } from "./users/user.entity";
export declare class SeederService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    seed(): Promise<void>;
}

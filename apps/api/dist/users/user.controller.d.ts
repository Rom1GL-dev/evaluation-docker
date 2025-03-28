import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(body: {
        name: string;
        email: string;
        password: string;
    }): Promise<import("./user.entity").User>;
    getUsers(): Promise<import("./user.entity").User[]>;
}

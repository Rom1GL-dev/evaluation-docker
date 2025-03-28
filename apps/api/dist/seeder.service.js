"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./users/user.entity");
let SeederService = class SeederService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
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
};
exports.SeederService = SeederService;
exports.SeederService = SeederService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeederService);
//# sourceMappingURL=seeder.service.js.map
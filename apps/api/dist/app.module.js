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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/user.entity");
const user_modules_1 = require("./users/user.modules");
const common_1 = require("@nestjs/common");
const seeder_service_1 = require("./seeder.service");
let AppModule = class AppModule {
    seederService;
    constructor(seederService) {
        this.seederService = seederService;
    }
    async onModuleInit() {
        await this.seederService.seed();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    const username = configService.get('POSTGRES_USER');
                    const password = configService.get('POSTGRES_PASSWORD');
                    const database = configService.get('POSTGRES_DB');
                    return {
                        type: 'postgres',
                        host: 'db',
                        port: 5432,
                        username,
                        password,
                        database,
                        entities: [user_entity_1.User],
                        synchronize: true,
                    };
                },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            user_modules_1.UserModule,
        ],
        providers: [seeder_service_1.SeederService],
    }),
    __metadata("design:paramtypes", [seeder_service_1.SeederService])
], AppModule);
//# sourceMappingURL=app.module.js.map
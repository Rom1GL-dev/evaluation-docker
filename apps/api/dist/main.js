"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logStream = fs.createWriteStream('/app/logs/api.log', { flags: 'a' });
    const logger = new common_1.Logger('Bootstrap');
    console.log = (...args) => {
        logStream.write(args.join(' ') + '\n');
    };
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
    });
    await app.listen(3000);
    logger.log('Application démarrée sur le port 3000');
}
bootstrap();
//# sourceMappingURL=main.js.map
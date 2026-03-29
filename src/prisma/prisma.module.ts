import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

// @Global() — делает модуль доступным во всём приложении без явного импорта.
// Это удобно, потому что PrismaService нужен почти везде.
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Разрешаем другим модулям использовать PrismaService
})
export class PrismaModule {}

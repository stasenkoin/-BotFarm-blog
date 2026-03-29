import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// PrismaService — обёртка над PrismaClient для использования внутри NestJS.
// extends PrismaClient — наследуем все методы работы с БД.
// implements OnModuleInit — NestJS вызовет onModuleInit() при старте приложения.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Подключаемся к базе данных при старте приложения
    await this.$connect();
  }
}

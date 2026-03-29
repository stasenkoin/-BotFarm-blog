import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { CategoriesModule } from './categories/categories.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';

// AppModule — корневой модуль приложения.
// imports — подключаем все доменные модули.
@Module({
  imports: [
    PrismaModule,
    PostsModule,
    CategoriesModule,
    CommentsModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

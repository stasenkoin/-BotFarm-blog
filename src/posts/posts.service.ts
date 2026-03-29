import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [
    {
      id: 1,
      title: 'Начало работы с NestJS',
      content:
        '<p>NestJS — это фреймворк для создания серверных приложений на Node.js. Он использует TypeScript и вдохновлён Angular.</p><p>В этом посте мы рассмотрим базовую структуру проекта.</p>',
      excerpt: 'NestJS — фреймворк для серверных приложений на Node.js...',
      author: 'Админ',
      categoryName: 'Технологии',
      date: '2026-01-15',
    },
    {
      id: 2,
      title: 'Что такое Prisma ORM',
      content:
        '<p>Prisma — это современная ORM для Node.js и TypeScript. Она позволяет работать с базой данных через удобные объекты.</p>',
      excerpt: 'Prisma — современная ORM для работы с базой данных...',
      author: 'Админ',
      categoryName: 'Базы данных',
      date: '2026-02-10',
    },
    {
      id: 3,
      title: 'Шаблонизация с Handlebars',
      content:
        '<p>Handlebars — простой шаблонизатор, который позволяет вставлять данные в HTML-шаблоны с помощью двойных фигурных скобок.</p>',
      excerpt: 'Handlebars позволяет вставлять данные в HTML-шаблоны...',
      author: 'Евгений',
      categoryName: 'Frontend',
      date: '2026-03-01',
    },
  ];

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find((post) => post.id === id);
  }
}

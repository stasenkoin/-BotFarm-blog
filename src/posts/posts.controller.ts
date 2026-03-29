import { Controller, Get, Param, Query, Render } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  @Render('posts')
  getAllPosts(@Query('logged_in') loggedIn: string) {
    // @Query — достаёт параметр из URL, например /posts?logged_in=true
    const isLoggedIn = loggedIn === 'true';

    return {
      title: 'Все посты',
      posts: this.postsService.findAll(),
      isLoggedIn,
      userName: isLoggedIn ? 'Евгений' : null,
    };
  }

  // GET /posts/1 — страница одного поста (число из URL попадает в :id)
  @Get(':id')
  @Render('post')
  getOnePost(@Param('id') id: string, @Query('logged_in') loggedIn: string) {
    // @Param — достаёт параметр из пути URL, например /posts/1 → id = "1"
    const isLoggedIn = loggedIn === 'true';
    const post = this.postsService.findOne(Number(id));

    return {
      title: post?.title || 'Пост не найден',
      post,
      comments: [
        { author: 'Читатель', content: 'Отличная статья, спасибо!' },
        { author: 'Студент', content: 'Очень помогло разобраться.' },
      ],
      isLoggedIn,
      userName: isLoggedIn ? 'Евгений' : null,
    };
  }
}

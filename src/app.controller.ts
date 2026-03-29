import { Controller, Get, Query, Render } from '@nestjs/common';
import { PostsService } from './posts/posts.service';

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService) {}

  // GET / — главная страница
  @Get()
  @Render('home')
  getHomePage(@Query('logged_in') loggedIn: string) {
    const isLoggedIn = loggedIn === 'true';

    return {
      title: 'Главная',
      posts: this.postsService.findAll().slice(0, 3), // последние 3 поста
      isLoggedIn,
      userName: isLoggedIn ? 'Евгений' : null,
    };
  }

  // GET /about — страница "О блоге"
  @Get('about')
  @Render('about')
  getAboutPage(@Query('logged_in') loggedIn: string) {
    const isLoggedIn = loggedIn === 'true';

    return {
      title: 'О блоге',
      isLoggedIn,
      userName: isLoggedIn ? 'Евгений' : null,
    };
  }
}

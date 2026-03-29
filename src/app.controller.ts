import { Controller, Get, Query, Render } from '@nestjs/common';
import { PostsService } from './posts/posts.service';

@Controller()
export class AppController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @Render('home')
  getHomePage(@Query('logged_in') loggedIn: string) {
    const isLoggedIn = loggedIn === 'true';

    return {
      title: 'Главная',
      posts: this.postsService.findAll().slice(0, 3),
      isLoggedIn,
      userName: isLoggedIn ? 'Евгений' : null,
    };
  }

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

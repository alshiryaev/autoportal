import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get(['', 'addDetail', 'details'])
  @Render('layout')
  pages() {}
}

import { Controller, Get, Render } from '@nestjs/common';

@Controller('/')
export class AppController {

    @Get(['', 'details'])
    @Render('layout')
    pages() {

    }
}

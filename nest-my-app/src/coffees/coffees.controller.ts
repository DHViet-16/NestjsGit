import { Body, Controller, Get, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }
    @Post()
    create(@Body('name') body)
    {
        return body;
    }

}

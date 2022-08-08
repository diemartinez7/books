import { Controller, Get, Post, Body, Delete, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { Param } from '@nestjs/common';
import { Query } from '@nestjs/common';


@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) { }

  @Get()
  findAll(@Query('order') order: string) {
    let params = [];

    if (order !== undefined) {
      params.push(`'${order}'`);
    }

    return this.booksService.findAll(params);
  }

  @Get(':bookId')
  findBook(@Param('bookId') bookId: string) {
    return this.booksService.findBook(bookId);
  }

  @Post()
  createBook(@Body() body) {
    let newBook: any = body;
    return this.booksService.createBook(newBook);
  }

  @Delete(':bookId')
  deleteBook(@Param('bookId') bookId: string) {
    return this.booksService.deleteBook(bookId);
  }

  @Put(':bookId')
  updateBook(@Param('bookId') bookId: string, @Body() body) {
    let newBook: any = body;
    return this.booksService.updateBook(bookId, newBook);
  }
}

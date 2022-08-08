import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {

  findAll(params): any {
    return params.length > 0
      ? `findAll funcionando con ${params}`
      : 'findAll funcionando';
  }

  findBook(bookId: string) {
    return `findBook funcionando con bookId: ${bookId}`;
  }

  createBook(newBook: any) {
    return newBook;
  }

  deleteBook(bookId: string) {
    return `deleteBook funcionando con bookId: ${bookId}`;
  }

  updateBook(bookId: string, newBook: any) {
    return newBook;
  }
}

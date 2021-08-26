import { Book } from '@app/shared/book';
import { BookRaw } from '@app/shared/book-raw';

export class BookFactory {
  static fromRaw(b: BookRaw): Book {
    return {
      ...b,
      published: new Date(b.published)
    };
  }
}

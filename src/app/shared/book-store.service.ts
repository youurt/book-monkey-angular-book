import { Injectable } from '@angular/core';
import { Book } from '@app/shared/book';
import { BookRaw } from '@app/shared/book-raw';
import { BookFactory } from '@app/shared/book-factory';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { BASE_URL } from '@app/shared/constants';
import { map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private api = BASE_URL;

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.log('Fehler aufgetreten!'); // log error
    return throwError(error);
  }

  constructor(private http: HttpClient) {}

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      retry(3),
      map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
      catchError(this.errorHandler)
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/book/${isbn}`).pipe(
      retry(3),
      map((b) => BookFactory.fromRaw(b)),
      catchError(this.errorHandler)
    );
  }

  remove(isbn: string): Observable<unknown> {
    return this.http
      .delete(`${this.api}/book/${isbn}`, {
        responseType: 'text'
      })
      .pipe(retry(3), catchError(this.errorHandler));
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map((booksRaw) => booksRaw.map((b) => BookFactory.fromRaw(b))),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/book`, book, { responseType: 'text' })
      .pipe(catchError(this.errorHandler));
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/book/${book.isbn}`, book, {
        responseType: 'text'
      })
      .pipe(retry(3), catchError(this.errorHandler));
  }
}

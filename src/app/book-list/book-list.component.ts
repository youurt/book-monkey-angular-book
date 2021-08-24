import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/book';
import { BookStoreService } from '@app/shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit(): void {
    this.bs.getAll().subscribe((res) => (this.books = res));
  }
}

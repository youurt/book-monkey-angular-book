import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@app/shared/book';
import { BookStoreService } from '@app/shared/book-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(private bs: BookStoreService, private route: ActivatedRoute) {}

  getRating(num: number) {
    return new Array(num);
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book = this.bs.getSingle(params.get('isbn'));
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@app/shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  @Input() book: Book;
  @Output() showListEvent = new EventEmitter<any>();

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}

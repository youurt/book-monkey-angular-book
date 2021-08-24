import { Component, OnInit } from '@angular/core';
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

  getRating(num: number): Array<number> {
    return new Array(num);
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn')).subscribe((b) => (this.book = b));
  }
}

import { Component, OnInit } from '@angular/core';
import { Book } from '@app/shared/book';
import { BookStoreService } from '@app/shared/book-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  book$: Observable<Book>;

  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.book$ = this.bs.getSingle(params.get('isbn'));
  }

  getRating(num: number): Array<number> {
    return new Array(num);
  }

  removeBook(): void {
    if (confirm('Buch wirklich löschen?')) {
      this.bs
        .remove(this.book.isbn)
        .subscribe(() =>
          this.router.navigate(['../'], { relativeTo: this.route })
        );
    }
  }
}

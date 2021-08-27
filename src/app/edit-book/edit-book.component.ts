import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@app/shared/book';
import { BookStoreService } from '@app/shared/book-store.service';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'bm-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  book$: Observable<Book>;
  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  updateBook(book: Book) {
    this.bs.update(book).subscribe(() => {
      this.router.navigate(['../../..', 'books', book.isbn], {
        relativeTo: this.route
      });
    });
  }

  ngOnInit(): void {
    this.book$ = this.route.paramMap.pipe(
      map((params) => params.get('isbn')),
      switchMap((isbn: string) => this.bs.getSingle(isbn))
    );
  }
}

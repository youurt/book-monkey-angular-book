import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookStoreService } from '@app/shared/book-store.service';
import { Book } from '@app/shared/book';

@Component({
  selector: 'bm-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  constructor(
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.router.navigate(['../..', 'books'], { relativeTo: this.route });
    });
  }
}

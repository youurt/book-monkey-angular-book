import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from 'rxjs/operators';
import { BookStoreService } from '@app/shared/book-store.service';
import { Book } from '@app/shared/book';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyUp$ = new Subject<string>();
  foundBooks: Book[] = [];
  isLoading = false;
  constructor(private bs: BookStoreService) {}

  ngOnInit(): void {
    this.keyUp$
      .pipe(
        filter((term) => term.length >= 3),
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => (this.isLoading = true)),
        switchMap((searcTerm) => this.bs.getAllSearch(searcTerm)),
        tap(() => (this.isLoading = false))
      )
      .subscribe((books) => (this.foundBooks = books));
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from '@app/books/books-routing.module';
import { BookListComponent } from '@app/books/book-list/book-list.component';
import { BookListItemComponent } from '@app/books/book-list-item/book-list-item.component';
import { BookDetailsComponent } from '@app/books/book-details/book-details.component';
import { IsbnPipe } from '@app/books/shared/isbn.pipe';
import { ZoomDirective } from '@app/books/shared/zoom.directive';
import { DelayDirective } from '@app/books/shared/delay.directive';

@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ],
  imports: [CommonModule, BooksRoutingModule]
})
export class BooksModule {}

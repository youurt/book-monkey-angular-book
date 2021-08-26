import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { BookListComponent } from '@app/book-list/book-list.component';
import { BookDetailsComponent } from '@app/book-details/book-details.component';
import { CreateBookComponent } from '@app/create-book/create-book.component';
import { EditBookComponent } from '@app/edit-book/edit-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookDetailsComponent },
  { path: 'admin', redirectTo: 'admin/create', pathMatch: 'full' },
  { path: 'admin/create', component: CreateBookComponent },
  { path: 'admin/edit/:isbn', component: EditBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { BookListComponent } from '@app/book-list/book-list.component';
import { BookDetailsComponent } from '@app/book-details/book-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:isbn', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

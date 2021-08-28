import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from '@app/admin/admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { BookFormComponent } from '@app/admin/book-form/book-form.component';
import { CreateBookComponent } from '@app/admin/create-book/create-book.component';
import { EditBookComponent } from '@app/admin/edit-book/edit-book.component';
import { FormMessagesComponent } from '@app/admin/form-messages/form-messages.component';

@NgModule({
  declarations: [
    BookFormComponent,
    CreateBookComponent,
    EditBookComponent,
    FormMessagesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule
  ]
})
export class AdminModule {}

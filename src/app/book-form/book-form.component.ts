import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from '@angular/core';

import { Book, Thumbnail } from '@app/shared/book';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'bm-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit, OnChanges {
  bookForm: FormGroup;
  @Input() book?: Book;
  @Input() editing = false;
  @Output() submitBook = new EventEmitter<Book>();

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      subtitle: [''],
      isbn: [
        { value: '', disabled: this.editing },
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13)
        ]
      ],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      thumbnails: this.buildThumbnailsArray([{ title: '', url: '' }]),
      published: []
    });
  }

  // private initForm() {
  //   if (this.bookForm) {
  //     return;
  //   }

  // }

  private buildAuthorsArray(values: string[]): FormArray {
    return this.fb.array(values, Validators.required);
  }

  private buildThumbnailsArray(values: Thumbnail[]): FormArray {
    return this.fb.array(values.map((t) => this.fb.group(t)));
  }

  private setFormValues(book: Book) {
    this.bookForm.patchValue(book);
    this.bookForm.setControl('authors', this.buildAuthorsArray(book.authors));
    if (book.thumbnails) {
      this.bookForm.setControl(
        'thumbnails',
        this.buildThumbnailsArray(book.thumbnails)
      );
    }
  }

  submitForm() {
    const formValue = this.bookForm.value;
    const authors = formValue.authors.filter((author: string) => author);
    const thumbnails = formValue.thumbnails.filter(
      (thumbnail: Thumbnail) => thumbnail.url
    );
    const isbn = this.editing && this.book ? this.book.isbn : formValue.isbn;

    const newBook: Book = {
      ...formValue,
      authors,
      thumbnails,
      isbn
    };

    this.submitBook.emit(newBook);
    this.bookForm.reset();
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.bookForm.get('thumbnails') as FormArray;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(this.fb.group({ url: '', title: '' }));
  }

  ngOnChanges(): void {
    // this.initForm();
    if (this.book) {
      this.setFormValues(this.book);
    }
  }

  ngOnInit(): void {
    // this.initForm();
  }
}
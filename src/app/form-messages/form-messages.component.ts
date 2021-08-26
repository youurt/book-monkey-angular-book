import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'bm-form-messages',
  templateUrl: './form-messages.component.html',
  styleUrls: ['./form-messages.component.scss']
})
export class FormMessagesComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() controlName: string;

  private allMessages = {
    title: {
      required: 'Ein Buchtitel muss angegeben werden'
    },
    isbn: {
      required: 'Ein ISBN muss angegeben werden',
      minlength: 'Die ISBN muss mindestens 10 Zeichen haben',
      maxlength: 'Die ISBN darf höchstens 13 Zeichen haben'
    },
    published: {
      required: 'Ein muss ein Erscheinungsdatum angegeben werden'
    },
    authors: {
      required: 'Ein muss ein Autor angegeben werden'
    }
  };

  errorsForControl(): string[] {
    const messages = this.allMessages[this.controlName];
    if (
      !this.control ||
      !this.control.errors ||
      !messages ||
      !this.control.dirty
    ) {
      return null;
    }

    return Object.keys(this.control.errors).map((err) => messages[err]);
  }

  constructor() {}

  ngOnInit(): void {}
}

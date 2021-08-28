import { FormArray, FormControl, ValidationErrors } from '@angular/forms';

export class BookValidators {
  static isbnFormat(control: FormControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    return /(^\d{10}$)|(^\d{13}$)/.test(control.value.replace(/-/g, ''))
      ? null
      : {
          isbnFormat: { valid: false }
        };
  }
  static atLeastOneAuthor(controlArray: FormArray): ValidationErrors | null {
    return controlArray.controls.some((el) => el.value)
      ? null
      : {
          atLeastOneAuthor: { valid: false }
        };
  }
}

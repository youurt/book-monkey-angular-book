import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {
  transform(value: string): string {
    return !value ? null : `${value.substr(0, 3)}-${value.substr(3)}`;
  }
}

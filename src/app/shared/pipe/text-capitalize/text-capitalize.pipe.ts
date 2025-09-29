import { Pipe, PipeTransform } from '@angular/core';

// Пайп для верного регистра символов в строке
@Pipe({
  name: 'textCapitalize'
})
export class TextCapitalizePipe implements PipeTransform {

  transform(text: string | undefined, forLetter: boolean): string {
    if (!text) return '';

    const sliceIndex = forLetter ? 0 : 1;
    return text[0].toUpperCase() + text.slice(sliceIndex).toLowerCase();
  }

}

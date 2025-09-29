import {Component, input} from '@angular/core';
import {CORRECT_LETTER_KEY, Letter} from '../../shared/alphabet/letter-attribute';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-alphabet',
  imports: [
    RouterLink
  ],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.css'
})
export class AlphabetComponent { // Компонент для вывода всего алфавита
  readonly alphabetList = input.required<Letter[]>();

  isLetterCorrect(latinLetter: Letter['latinLetter']): boolean {
    let lsCorrectList = localStorage.getItem(CORRECT_LETTER_KEY);

    if (lsCorrectList) {
      const parsedList: string[] = JSON.parse(lsCorrectList);
      return parsedList.includes(latinLetter);
    }

    return false;
  }
}

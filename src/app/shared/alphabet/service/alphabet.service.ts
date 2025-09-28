import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {ALPHABET_LIST, ALPHABET_WORD_DATA} from '../TestData';
import {Letter, LetterAttribute} from '../letter-attribute';

// Сервис получения данных из псевдо-бека.
@Injectable({
  providedIn: 'root'
})
export class AlphabetService {

  // Метод получения всего доступного алфавита
  getAlphabet(): Observable<Letter[]> {
    return of(ALPHABET_LIST);
  }

  // Метод получения объекта буквы и ее атрибутов
  getLetterAttribute(letter: string): Observable<LetterAttribute> {

    // Функция забирает рандомный элемент из массива
    function getRandomElFromList<T>(list: T[]): T {
      const index = Math.floor(Math.random() * list.length);

      return list[index];
    }

    const letterObj = ALPHABET_WORD_DATA.find( obj => obj.latinLetter === letter);
    if (letterObj) {
      const letterAttribute = new LetterAttribute();
      Object.assign(letterAttribute, {...letterObj, word: getRandomElFromList(letterObj.words)})

      return of(letterAttribute);
    }

    return throwError(() => new Error('Такой буквы нет!'));
  }
}

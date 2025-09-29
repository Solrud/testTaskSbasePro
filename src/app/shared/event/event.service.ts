import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {LetterAttribute} from '../alphabet/letter-attribute';

// Сервис из реактивных rxjs сущностей, для передачи данных.
@Injectable({
  providedIn: 'root'
})
export class EventService {
  // Метод и переменные для изменения/получения корректно выбранной буквы.
  private correctLetterData$ = new Subject<LetterAttribute>();
  setCorrectLetter(letterAtr: LetterAttribute | null): void {
    if (letterAtr) this.correctLetterData$.next(letterAtr);
  }
  public correctLetter$ = this.correctLetterData$.asObservable();
}

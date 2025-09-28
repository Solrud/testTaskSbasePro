import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {LetterAttribute} from '../alphabet/letter-attribute';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private correctLetterData$ = new Subject<LetterAttribute>();
  setCorrectLetter(letterAtr: LetterAttribute | null): void {
    if (letterAtr) this.correctLetterData$.next(letterAtr);
  }
  public correctLetter$ = this.correctLetterData$.asObservable();
}

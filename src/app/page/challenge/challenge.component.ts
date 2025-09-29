import {Component, inject, OnInit, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AlphabetService} from '../../shared/alphabet/service/alphabet.service';
import {CORRECT_LETTER_KEY, Letter, LetterAttribute} from '../../shared/alphabet/letter-attribute';
import {EventService} from '../../shared/event/event.service';
import {AlphabetComponent} from '../../components/alphabet/alphabet.component';

@Component({
  selector: 'app-challenge',
  imports: [
    RouterOutlet,
    AlphabetComponent,
    RouterLink
  ],
  templateUrl: './challenge.component.html',
  styleUrl: './challenge.component.css',
  host: {
    style: 'display: flex; justify-content: center; align-items: center; height: 100dvh; width: 100%;'
  }
})
export class ChallengeComponent implements OnInit{ // Компонент страницы игры
  private readonly alphabetService = inject(AlphabetService);
  private readonly eventService = inject(EventService);

  readonly alphabetList = signal<Letter[]>([]); // Сигнал со значением всего полученного алфавита

  // Выполнение методов при инициализации
  ngOnInit() {
    this.getAllAlphabet();
    this.subscribeCorrectLetter();
  };

  // Получение всего алфавита с "псевдо бека"
  getAllAlphabet(): void {
    this.alphabetService.getAlphabet()
      .subscribe({
        next: abcList => this.alphabetList.set(abcList)
      })
  };

  // Подписка на выборку верной буквы
  subscribeCorrectLetter(): void {
    this.eventService.correctLetter$
      .subscribe({
        next: value =>  {
          this.pushCorrectLettersInLS(value);
        }
      })
  };

  // Добавление правильно выбранных букв в массив ls
  pushCorrectLettersInLS(value: LetterAttribute): void {
    let lsCorrectList = localStorage.getItem(CORRECT_LETTER_KEY);

    if (!lsCorrectList) {
      localStorage.setItem(CORRECT_LETTER_KEY, JSON.stringify([value.latinLetter]))
    } else {
      const parsedList: string[] = JSON.parse(lsCorrectList);
      const isLetterInLS = parsedList.includes(value.latinLetter);

      if (!isLetterInLS) {
        parsedList.push(value.latinLetter);
        localStorage.setItem(CORRECT_LETTER_KEY, JSON.stringify(parsedList));
      }
    }
  }
}

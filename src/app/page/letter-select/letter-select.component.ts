import {Component, inject, OnInit, signal} from '@angular/core';
import {AlphabetService} from '../../shared/alphabet/service/alphabet.service';
import {ActivatedRoute} from '@angular/router';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {LetterAttribute} from '../../shared/alphabet/letter-attribute';
import {TextCapitalizePipe} from '../../shared/pipe/text-capitalize/text-capitalize.pipe';
import {EventService} from '../../shared/event/event.service';

enum toastMessageEnum {
  CORRECT = 'Правильно!',
  INCORRECT = 'Неправильно..'
}

@Component({
  selector: 'app-letter-select',
  imports: [
    NgTemplateOutlet,
    TextCapitalizePipe,
    NgClass
  ],
  templateUrl: './letter-select.component.html',
  styleUrl: './letter-select.component.css'
})
export class LetterSelectComponent implements OnInit{ // Компонент для "игры" с буквой и ее словами
  private readonly alphabetService = inject(AlphabetService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly eventService = inject(EventService);

  readonly errorMessage = signal<string | null>(null); // Сигнал. Сообщение если нет такой буквы из url
  readonly letterAttributeObj = signal<LetterAttribute | null>(null); // Сигнал. Объект хранящий атрибуты буквы
  wordByLetterList: string[] = []; // Массив слова составленный посимвольно
  letterCorrectIndexList: string[] = []; // Массив уже правильно выбранных букв
  messageForToast: toastMessageEnum | null = null; // Хранит сообщение для уведомления о правильности выбранной буквы
  timeoutShowMessageForToast: ReturnType<typeof setTimeout> | null = null; // Хранит таймер для показа сообщения в уведомлении

  get toastMessageEnum() {
    return toastMessageEnum
  }

  ngOnInit(): void {
    this.initUrlLetter();
  }

  // Сброс значений переменных при переключении буквы
  initByDefaultValues(): void {
    this.letterCorrectIndexList = [];
    this.wordByLetterList = [];
    this.errorMessage.set(null);
    this.letterAttributeObj.set(null);
    this.messageForToast = null;
  }

  // Распарсивание из url:letter какая буква открыта
  initUrlLetter(): void {
    this.activatedRoute.paramMap
      .subscribe({
        next: paramMap => {
          const urlLetter = paramMap.get('letter');
          if (urlLetter) {
            this.loadLetterAttributeFromUrlLetter(urlLetter);
          } else {
            this.errorMessage.set('Для начала выберите букву:');
          }
        }
      })
  }

  // Загрузка с "бека" обьекта с атрибутами буквы
  loadLetterAttributeFromUrlLetter(urlLetter: string): void {
    this.alphabetService.getLetterAttribute(urlLetter)
      .subscribe({
        next: result => {
          this.initByDefaultValues();
          this.wordByLetterList = result.word.split('');
          this.letterAttributeObj.set(result);
        },
        error: err => this.errorMessage.set(err.message)
    });
  }

  // Метод для шаблона для подсветки правильных букв
  isCorrectLetter(index: number): boolean {
    const currentLetter = this.letterCorrectIndexList[index];

    return !!currentLetter;
  }

  // Метод проверки правильно ли выбрана буква
  onClickLetter(letter: string, index: number): void {
    const clickedLetter = this.wordByLetterList[index].toLowerCase();
    const correctLetter =  this.letterAttributeObj()?.cyrillicLetter.toLowerCase();

    if (clickedLetter === correctLetter) {
      if (!this.letterCorrectIndexList[index]) this.showToastMessage(toastMessageEnum.CORRECT);
      this.letterCorrectIndexList[index] = letter;

      this.eventService.setCorrectLetter(this.letterAttributeObj());
    } else {
      this.showToastMessage(toastMessageEnum.INCORRECT);
    }
  }

  // Показать уведомление о правильности выбранной буквы
  showToastMessage(text: toastMessageEnum): void {
    this.messageForToast = text;
    if (this.timeoutShowMessageForToast) clearTimeout(this.timeoutShowMessageForToast)
    this.timeoutShowMessageForToast = setTimeout(()=> this.messageForToast = null, 3000);
  }
}

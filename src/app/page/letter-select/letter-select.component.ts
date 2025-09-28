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
export class LetterSelectComponent implements OnInit{
  private readonly alphabetService = inject(AlphabetService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly eventService = inject(EventService);

  readonly errorMessage = signal<string | null>(null);
  readonly letterAttributeObj = signal<LetterAttribute | null>(null);
  wordByLetterList: string[] = [];
  letterCorrectIndexList: string[] = [];
  messageForToast: string | null = null;
  timeoutShowMessageForToast: ReturnType<typeof setTimeout> | null = null;

  get toastMessageEnum() {
    return toastMessageEnum
  }

  ngOnInit(): void {
    this.initUrlLetter();
  }

  initByDefaultValues(): void {
    this.letterCorrectIndexList = [];
    this.wordByLetterList = [];
    this.errorMessage.set(null);
    this.letterAttributeObj.set(null);
    this.messageForToast = null;
  }

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

  isCorrectLetter(index: number): boolean {
    const currentLetter = this.letterCorrectIndexList[index];

    return !!currentLetter;
  }

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

  showToastMessage(text: toastMessageEnum): void {
    this.messageForToast = text;
    if (this.timeoutShowMessageForToast) clearTimeout(this.timeoutShowMessageForToast)
    this.timeoutShowMessageForToast = setTimeout(()=> this.messageForToast = null, 3000);
  }
}

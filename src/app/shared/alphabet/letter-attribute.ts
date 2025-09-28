// Модель для списка всего доступного алфавита с "бекенда"
export class Letter {
  id: number | null = null;
  latinLetter: string = '';
  cyrillicLetter: string = '';
}

// Ключ для LocalStorage;
export const CORRECT_LETTER_KEY = 'testFromSbasePro-ABC:correctLetterList';

// Базовая модель для наследования
class Base extends Letter{
  mainWord: string = '';
  url: string = '';
}

// Модель полученная с "бекенда"
export class LetterAttribute extends Base{
  word: string = '';
}

// Модель DTO для "бекенда";
export class LetterAttributeDTO extends Base{
  words: string[] = [];
}

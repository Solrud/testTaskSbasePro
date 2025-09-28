import {LetterAttributeDTO, Letter} from './letter-attribute';

export const ALPHABET_LIST: Letter[] = [
  {id: Math.random(), cyrillicLetter: 'Аа', latinLetter: 'a'},
  {id: Math.random(), cyrillicLetter: 'Бб', latinLetter: 'b'},
  {id: Math.random(), cyrillicLetter: 'Вв', latinLetter: 'v'},
  {id: Math.random(), cyrillicLetter: 'Гг', latinLetter: 'g'},
  {id: Math.random(), cyrillicLetter: 'Дд', latinLetter: 'd'},
  {id: Math.random(), cyrillicLetter: 'Ее', latinLetter: 'ye'},
  {id: Math.random(), cyrillicLetter: 'Жж', latinLetter: 'zh'},
  {id: Math.random(), cyrillicLetter: 'Зз', latinLetter: 'z'},
  {id: Math.random(), cyrillicLetter: 'Ии', latinLetter: 'i'},
  {id: Math.random(), cyrillicLetter: 'Йй', latinLetter: 'j'},
  {id: Math.random(), cyrillicLetter: 'Кк', latinLetter: 'k'},
  {id: Math.random(), cyrillicLetter: 'Лл', latinLetter: 'l'},
  {id: Math.random(), cyrillicLetter: 'Мм', latinLetter: 'm'},
  {id: Math.random(), cyrillicLetter: 'Нн', latinLetter: 'n'},
  {id: Math.random(), cyrillicLetter: 'Оо', latinLetter: 'o'},
  {id: Math.random(), cyrillicLetter: 'Пп', latinLetter: 'p'},
  {id: Math.random(), cyrillicLetter: 'Рр', latinLetter: 'r'},
  {id: Math.random(), cyrillicLetter: 'Сс', latinLetter: 's'},
  {id: Math.random(), cyrillicLetter: 'Тт', latinLetter: 't'},
  {id: Math.random(), cyrillicLetter: 'Уу', latinLetter: 'u'},
  {id: Math.random(), cyrillicLetter: 'Фф', latinLetter: 'f'},
  {id: Math.random(), cyrillicLetter: 'Хх', latinLetter: 'h'},
  {id: Math.random(), cyrillicLetter: 'Цц', latinLetter: 'c'},
  {id: Math.random(), cyrillicLetter: 'Чч', latinLetter: 'ch'},
  {id: Math.random(), cyrillicLetter: 'Шш', latinLetter: 'sh'},
  {id: Math.random(), cyrillicLetter: 'Щщ', latinLetter: 'sch'},
  {id: Math.random(), cyrillicLetter: 'Ъъ', latinLetter: 'hard'},
  {id: Math.random(), cyrillicLetter: 'Ыы', latinLetter: 'y'},
  {id: Math.random(), cyrillicLetter: 'Ьь', latinLetter: 'soft'},
  {id: Math.random(), cyrillicLetter: 'Ээ', latinLetter: 'e'},
  {id: Math.random(), cyrillicLetter: 'Юю', latinLetter: 'yu'},
  {id: Math.random(), cyrillicLetter: 'Яя', latinLetter: 'ya'}
];

export const ALPHABET_WORD_DATA: LetterAttributeDTO[] = [
  {
    id: 0,
    latinLetter: 'a',
    cyrillicLetter: 'а',
    mainWord: 'Арбуз',
    url: 'assets/imgs/alphabet/a-word.png',
    words: ['Трактор', 'Булка', 'Абракадабра']
  },
  {
    id: 1,
    latinLetter: 'b',
    cyrillicLetter: 'б',
    mainWord: 'Баг',
    url: 'assets/imgs/alphabet/b-word.png',
    words: ['Разработка', 'Библиотека', 'Объект']
  },
  {
    id: 2,
    latinLetter: 'v',
    cyrillicLetter: 'в',
    mainWord: 'Веб',
    url: 'assets/imgs/alphabet/v-word.png',
    words: ['Сервер', 'Вывод', 'Ввод']
  },
  {
    id: 3,
    latinLetter: 'g',
    cyrillicLetter: 'г',
    mainWord: 'Гит',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Конфигурация', 'Программа', 'Аггрегация']
  },
  {
    id: 4,
    latinLetter: 'd',
    cyrillicLetter: 'д',
    mainWord: 'Деплой',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Модуль', 'Индекс', 'Документация']
  },
  {
    id: 5,
    latinLetter: 'ye',
    cyrillicLetter: 'е',
    mainWord: 'Енум',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Процесс', 'Сеть', 'Емкость']
  },
  {
    id: 6,
    latinLetter: 'zh',
    cyrillicLetter: 'ж',
    mainWord: 'Журнал',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Ожидание', 'Жизненный цикл', 'Вложение']
  },
  {
    id: 7,
    latinLetter: 'z',
    cyrillicLetter: 'з',
    mainWord: 'Запрос',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Протокол', 'Закрытие', 'Зависимость']
  },
  {
    id: 8,
    latinLetter: 'i',
    cyrillicLetter: 'и',
    mainWord: 'Интерфейс',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Импорт', 'Итерация', 'Клиент']
  },
  {
    id: 9,
    latinLetter: 'j',
    cyrillicLetter: 'й',
    mainWord: 'Йот',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Интерфейс', 'Объект', 'Субъект']
  },
  {
    id: 10,
    latinLetter: 'k',
    cyrillicLetter: 'к',
    mainWord: 'Код',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Компилятор', 'Класс', 'Функция']
  },
  {
    id: 11,
    latinLetter: 'l',
    cyrillicLetter: 'л',
    mainWord: 'Логин',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Модель', 'Цикл', 'Логика']
  },
  {
    id: 12,
    latinLetter: 'm',
    cyrillicLetter: 'м',
    mainWord: 'Модуль',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Память', 'Команда', 'Метод']
  },
  {
    id: 13,
    latinLetter: 'n',
    cyrillicLetter: 'н',
    mainWord: 'Нода',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Сеть', 'Интерфейс', 'Наследование']
  },
  {
    id: 14,
    latinLetter: 'o',
    cyrillicLetter: 'о',
    mainWord: 'Объект',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Протокол', 'Оператор', 'Отладка']
  },
  {
    id: 15,
    latinLetter: 'p',
    cyrillicLetter: 'п',
    mainWord: 'Программа',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Процесс', 'Протокол', 'Приложение']
  },
  {
    id: 16,
    latinLetter: 'r',
    cyrillicLetter: 'р',
    mainWord: 'Репозиторий',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Сервер', 'Ошибка', 'Фреймворк']
  },
  {
    id: 17,
    latinLetter: 's',
    cyrillicLetter: 'с',
    mainWord: 'Сервер',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['База данных', 'Стек', 'Скрипт']
  },
  {
    id: 18,
    latinLetter: 't',
    cyrillicLetter: 'т',
    mainWord: 'Тест',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Протокол', 'Тип', 'Метод']
  },
  {
    id: 19,
    latinLetter: 'u',
    cyrillicLetter: 'у',
    mainWord: 'Утилита',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Интерфейс', 'Модуль', 'Процедура']
  },
  {
    id: 20,
    latinLetter: 'f',
    cyrillicLetter: 'ф',
    mainWord: 'Функция',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Фреймворк', 'Файл', 'Интерфейс']
  },
  {
    id: 21,
    latinLetter: 'h',
    cyrillicLetter: 'х',
    mainWord: 'Хост',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Хэш', 'Хранилище', 'Схема']
  },
  {
    id: 22,
    latinLetter: 'c',
    cyrillicLetter: 'ц',
    mainWord: 'Цикл',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Процесс', 'Объект', 'Интерфейс']
  },
  {
    id: 23,
    latinLetter: 'ch',
    cyrillicLetter: 'ч',
    mainWord: 'Число',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Вычисление', 'Запрос', 'Процесс']
  },
  {
    id: 24,
    latinLetter: 'sh',
    cyrillicLetter: 'ш',
    mainWord: 'Шина',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Кэш', 'Ошибка', 'Выполнение']
  },
  {
    id: 25,
    latinLetter: 'sch',
    cyrillicLetter: 'щ',
    mainWord: 'Щит',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Подсчет', 'Включение', 'Защита']
  },
  {
    id: 26,
    latinLetter: 'hard',
    cyrillicLetter: 'ъ',
    mainWord: 'Объект',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Объект', 'Проект', 'Субъект']
  },
  {
    id: 27,
    latinLetter: 'y',
    cyrillicLetter: 'ы',
    mainWord: 'Выключение',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Синтаксис', 'Система', 'Быстродействие']
  },
  {
    id: 28,
    latinLetter: 'soft',
    cyrillicLetter: 'ь',
    mainWord: 'Модуль',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Модуль', 'Сеть', 'Доступ']
  },
  {
    id: 29,
    latinLetter: 'e',
    cyrillicLetter: 'э',
    mainWord: 'Эндпоинт',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Экземпляр', 'Эффективность', 'Процесс']
  },
  {
    id: 30,
    latinLetter: 'yu',
    cyrillicLetter: 'ю',
    mainWord: 'Юнит',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Юнит', 'Модуль', 'Процедура']
  },
  {
    id: 31,
    latinLetter: 'ya',
    cyrillicLetter: 'я',
    mainWord: 'Ядро',
    url: 'assets/imgs/alphabet/any-word.png',
    words: ['Ядро', 'Оперативная', 'Система']
  }
];

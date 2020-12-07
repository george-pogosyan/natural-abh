import { WordPunctTokenizer } from './word_punct_tokenizer';

const tokenizer = new WordPunctTokenizer();

const string =
  '«Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аԥсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)';

const tokens = [
  '«',
  'Аԥсны',
  'Аҳәынҭқарра',
  'Ашьаустә',
  'закәанеидкыла',
  '»',
  '10.01.2007',
  'шықәсазтәи',
  'N',
  '1555',
  '-',
  'с',
  '-',
  'X',
  'I',
  'V',
  '(',
  'иаднакылт',
  'Аԥсны',
  'Жәлар',
  'Реизара',
  '–',
  'Апарламент',
  '2006',
  'ш',
  ',',
  'ԥхынҷкәынмза',
  '28',
  'рзы',
  ')',
  '(',
  'аредакциа',
  '29.06.2016',
  ')'
];

test('должен быть инстансом класса WordPunctTokenizer', () => {
  expect(tokenizer).toBeInstanceOf(WordPunctTokenizer);
});

test('должен правильно токенизировать строку', () => {
  expect(tokenizer.tokenize(string)).toStrictEqual(tokens);
});

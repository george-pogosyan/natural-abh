import { WordTokenizer } from './word_tokenizer';

const tokenizer = new WordTokenizer();

const string =
  '«Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аԥсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)';

const tokens = [
  'Аԥсны',
  'Аҳәынҭқарра',
  'Ашьаустә',
  'закәанеидкыла',
  'шықәсазтәи',
  'с',
  'иаднакылт',
  'Аԥсны',
  'Жәлар',
  'Реизара',
  'Апарламент',
  'ш',
  'ԥхынҷкәынмза',
  'рзы',
  'аредакциа'
];

test('должен быть инстансом класса WordTokenizer', () => {
  expect(tokenizer).toBeInstanceOf(WordTokenizer);
});

test('должен правильно токенизировать строку', () => {
  expect(tokenizer.tokenize(string)).toStrictEqual(tokens);
});

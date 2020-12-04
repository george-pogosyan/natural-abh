import { PunctTokenizer } from './punct_tokenizer';

const tokenizer = new PunctTokenizer();

const string =
  '«Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла» 10.01.2007 шықәсазтәи N 1555-с-XIV (иаднакылт Аԥсны Жәлар Реизара – Апарламент 2006 ш, ԥхынҷкәынмза 28 рзы) (аредакциа 29.06.2016)';

const tokensWithDiscardEmpty = [
  'Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла',
  'шықәсазтәи',
  'с',
  'иаднакылт Аԥсны Жәлар Реизара',
  'Апарламент',
  'ш',
  'ԥхынҷкәынмза',
  'рзы',
  'аредакциа'
];

const tokensWithoutDiscardEmpty = [
  '',
  'Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'шықәсазтәи',
  '',
  '',
  '',
  '',
  '',
  'с',
  '',
  '',
  '',
  '',
  'иаднакылт Аԥсны Жәлар Реизара',
  'Апарламент',
  '',
  '',
  '',
  'ш',
  'ԥхынҷкәынмза',
  '',
  'рзы',
  '',
  'аредакциа',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];

const tokensWithoutGaps = [
  '«',
  '»',
  '1',
  '0',
  '.',
  '0',
  '1',
  '.',
  '2',
  '0',
  '0',
  '7',
  'N',
  '1',
  '5',
  '5',
  '5',
  '-',
  '-',
  'X',
  'I',
  'V',
  '(',
  '–',
  '2',
  '0',
  '0',
  '6',
  ',',
  '2',
  '8',
  ')',
  '(',
  '2',
  '9',
  '.',
  '0',
  '6',
  '.',
  '2',
  '0',
  '1',
  '6',
  ')'
];

test('должен быть инстансом класса PunctTokenizer', () => {
  expect(tokenizer).toBeInstanceOf(PunctTokenizer);
});

test('должен правильно токенизировать строку', () => {
  expect(tokenizer.tokenize(string)).toStrictEqual(tokensWithDiscardEmpty);
});

test('должен правильно токенизировать не удаляю пустые элементы', () => {
  const _tokenizer = new PunctTokenizer({ discardEmpty: false });
  expect(_tokenizer.tokenize(string)).toStrictEqual(tokensWithoutDiscardEmpty);
});

test('должен вернуть всё, что не символы языка', () => {
  const _tokenizer = new PunctTokenizer({ gaps: false });
  expect(_tokenizer.tokenize(string)).toStrictEqual(tokensWithoutGaps);
});

import { readFileSync } from 'fs';
import { normalize } from './normalizer';

const wrongString = readFileSync(process.cwd() + '/tests/data/text.txt', 'utf8');
const rightString = readFileSync(process.cwd() + '/tests/data/normalized.txt', 'utf8');

test('нормализация работает правильно', () => {
  expect(normalize(wrongString)).toStrictEqual(rightString);
});

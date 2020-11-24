import { readFileSync } from 'fs';

import {
  ngrams,
  bigrams,
  trigrams,
  multrigrams
} from '../../src/ngrams/ngrams';

const text = readFileSync(process.cwd() + '/tests/data/text.txt', 'utf8');
const unogramsJSON = JSON.parse(
  readFileSync(process.cwd() + '/tests/data/unograms.json', 'utf8')
);

const bigramsJSON = JSON.parse(
  readFileSync(process.cwd() + '/tests/data/bigrams.json', 'utf8')
);
const trigramsJSON = JSON.parse(
  readFileSync(process.cwd() + '/tests/data/trigrams.json', 'utf8')
);
test('подсчёт унограмм', () => {
  expect(ngrams(text, 1, '', '', true)).toStrictEqual(unogramsJSON);
});

test('подсчёт биграмм', () => {
  expect(ngrams(text, 2, '', '', true)).toStrictEqual(bigramsJSON);
  expect(bigrams(text, '', '', true)).toStrictEqual(bigramsJSON);
});

test('подсчёт триграмм', () => {
  expect(ngrams(text, 3, '', '', true)).toStrictEqual(trigramsJSON);
  expect(trigrams(text, '', '', true)).toStrictEqual(trigramsJSON);
});

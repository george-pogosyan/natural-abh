import * as _ from 'underscore';
import { AggressiveTokenizer as Tokenizer } from '../tokenizers/aggressive_tokenizer';

const tokenizer = new Tokenizer();

export const ngrams = (
  _sequence: string,
  n: number,
  startSymbol: string,
  endSymbol: string,
  stats: boolean
) => {
  const result: Array<Array<string>> = [];
  const frequencies: any = {};
  let nrOfNgrams = 0;
  const sequence = tokenizer.tokenize(_sequence);

  // Calculates a key (string) that can be used for a map
  function arrayToKey(arr: string[]) {
    let str = '(';
    arr.forEach((x) => {
      str += `${x}, `;
    });
    str = `${str.substr(0, str.length - 2)})`;
    return str;
  }

  // Updates the statistics for the new ngram
  function countNgrams(ngram: string[]) {
    nrOfNgrams++;
    const key = arrayToKey(ngram);
    if (!frequencies[key]) {
      frequencies[key] = 0;
    }
    frequencies[key]++;
  }

  const count = _.max([0, sequence.length - n + 1]);

  // Check for left padding
  if (typeof startSymbol !== 'undefined' && startSymbol !== null) {
    // Create an array of (n) start symbols
    const blanks = [];
    for (let i = 0; i < n; i++) {
      blanks.push(startSymbol);
    }

    // Create the left padding
    for (let p = n - 1; p > 0; p--) {
      // Create a tuple of (p) start symbols and (n - p) words
      const ngram: string[] = blanks
        .slice(0, p)
        .concat(sequence.slice(0, n - p));
      result.push(ngram);
      countNgrams(ngram);
    }
  }

  // Build the complete ngrams
  for (let i = 0; i < count; i++) {
    const ngram = sequence.slice(i, i + n);
    result.push(ngram);
    if (stats) {
      countNgrams(ngram);
    }
  }

  // Check for right padding
  if (typeof endSymbol !== 'undefined' && endSymbol !== null) {
    // Create an array of (n) end symbols
    const blanks = [];
    for (let i = 0; i < n; i++) {
      blanks.push(endSymbol);
    }

    // create the right padding
    for (let p = n - 1; p > 0; p--) {
      // Create a tuple of (p) start symbols and (n - p) words
      const ngram = sequence
        .slice(sequence.length - p, sequence.length)
        .concat(blanks.slice(0, n - p));
      result.push(ngram);
      if (stats) {
        countNgrams(ngram);
      }
    }
  }

  if (stats) {
    // Count frequencies
    const Nr: any = {};
    Object.keys(frequencies).forEach((key) => {
      if (!Nr[frequencies[key]]) {
        Nr[frequencies[key]] = 0;
      }
      Nr[frequencies[key]]++;
    });

    const sortable = [];
    for (const frequency in frequencies) {
      sortable.push([frequency, frequencies[frequency]]);
    }

    sortable.sort((a, b) => a[1] - b[1]);

    // Return the ngrams AND statistics
    return {
      ngrams: result,
      frequencies,
      Nr,
      numberOfNgrams: nrOfNgrams
    };
  }
  // Do not break existing API of this module
  return result;
};

export const bigrams = (
  sequence: string,
  startSymbol: string,
  endSymbol: string,
  stats: boolean
) => ngrams(sequence, 2, startSymbol, endSymbol, stats);

export const trigrams = (
  sequence: string,
  startSymbol: string,
  endSymbol: string,
  stats: boolean
) => ngrams(sequence, 3, startSymbol, endSymbol, stats);

export const multrigrams = (
  sequence: string,
  n: number,
  startSymbol: string,
  endSymbol: string,
  stats: boolean
) => ngrams(sequence, n, startSymbol, endSymbol, stats);

import * as _ from 'underscore';
import { Tokenizer } from './tokenizer';

interface Options {
  pattern?: RegExp;
  discardEmpty?: boolean;
  gaps?: boolean | undefined;
}

// Base Class for RegExp Matching
export class RegexpTokenizer extends Tokenizer {
  public pattern: RegExp;

  public discardEmpty: boolean;

  public gaps: boolean | undefined;

  constructor(options: Options = {}) {
    super();
    this.pattern = options.pattern ?? this.pattern;
    this.discardEmpty = options.discardEmpty ?? true;
    // Match and split on GAPS not the actual WORDS
    this.gaps = options.gaps ?? true;
  }

  public tokenize = (s: string): string[] => {
    let results;

    if (this.gaps) {
      results = s.split(this.pattern);
      return this.discardEmpty ? _.without(results, '', ' ') : results;
    }
    return s.match(this.pattern);
  };
}

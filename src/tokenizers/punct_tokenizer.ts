import * as _ from 'underscore';
import { RegexpTokenizer } from './regexp_tokenizer';

interface Options {
  discardEmpty?: boolean;
  gaps?: boolean | undefined;
}

export class PunctTokenizer extends RegexpTokenizer {
  constructor(options: Options = {}) {
    super({
      ...options,
      pattern: new RegExp(/[.,\\/#!$%\\^&\\*;:{}=\-_`~()0-9A-Za-z\\«\\»–]/g)
    });
  }

  public tokenize = (s: string): string[] => {
    let results: string[];

    if (this.gaps) {
      results = s.split(this.pattern);
      results = this.discardEmpty ? _.without(results, '', ' ') : results;
      for (let i = 0; i < results.length; i++) {
        results[i] = results[i].replace(/ +/g, ' ').trim();
      }
      return results;
    }
    return s.match(this.pattern);
  };
}

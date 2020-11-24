import { RegexpTokenizer } from './regexp_tokenizer';

interface Options {
  pattern?: RegExp;
  discardEmpty?: boolean;
  gaps?: boolean | undefined;
}

export class WordPunctTokenizer extends RegexpTokenizer {
  constructor(options: Options) {
    super({ ...options, pattern: new RegExp(/(|.|!|\?|'|"|:|;|,|-)/i) });
  }
}

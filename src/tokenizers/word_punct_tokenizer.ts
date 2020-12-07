import { RegexpTokenizer } from './regexp_tokenizer';

interface Options {
  discardEmpty?: boolean;
  gaps?: boolean | undefined;
}

export class WordPunctTokenizer extends RegexpTokenizer {
  constructor(options: Options = {}) {
    super({
      ...options,
      pattern: new RegExp(
        /([АБВГӶҔДЏЕҼҾЖЗӠИКҚҞЛМНОҨПԤҦРСТҬУФХҲЦҴЧҶШЫЬӘабвгӷҕдџеҽҿжзӡикқҟлмноҩпԥҧрстҭуфхҳцҵчҷшыьә]+|[0-9._]+|.|!|\?|'|"|:|;|,|-)/i
      )
    });
  }
}

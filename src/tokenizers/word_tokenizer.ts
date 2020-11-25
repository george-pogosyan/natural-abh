import { RegexpTokenizer } from './regexp_tokenizer';

interface Options {
  pattern?: RegExp;
  discardEmpty?: boolean;
  gaps?: boolean | undefined;
}

export class WordTokenizer extends RegexpTokenizer {
  constructor(options: Options) {
    super({
      ...options,
      pattern: new RegExp(
        /[^АБВГӶҔДЏЕҼҾЖЗӠИКҚҞЛМНОҨПԤҦРСТҬУФХҲЦҴЧҶШЫЬӘабвгӷҕдџеҽҿжзӡикқҟлмноҩпԥҧрстҭуфхҳцҵчҷшыьә0-9_]+/
      )
    });
  }
}

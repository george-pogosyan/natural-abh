import { Tokenizer } from './tokenizer';

export class AggressiveTokenizer extends Tokenizer {
  withoutEmpty = (array: string[]): string[] => array.filter((a) => a);

  clearText = (text: string): string =>
    text
      .replace(
        /[^АБВГӶҔДЏЕҼҾЖЗӠИКҚҞЛМНОҨПԤҦРСТҬУФХҲЦҴЧҶШЫЬӘабвгӷҕдџеҽҿжзӡикқҟлмноҩпԥҧрстҭуфхҳцҵчҷшыьә0-9]/gi,
        ' '
      )
      .replace(/[\s\n]+/g, ' ')
      .trim();

  public tokenize = (text: string): string[] =>
    this.withoutEmpty(this.clearText(text).split(' '));
}

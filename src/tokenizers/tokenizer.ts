export class Tokenizer {
  public trim = (array: string[]) => {
    while (array[array.length - 1] === '') array.pop();

    while (array[0] === '') array.shift();

    return array;
  };

  // public attach = () => {
  //   // @ts-ignore
  //   String.prototype.tokenize = () => {
  //     // @ts-ignore
  //     return this.tokenize(this);
  //   };
  // };
}

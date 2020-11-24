export const ConversionTable = {
  Ҧ: 'Ԥ',
  ҧ: 'ԥ',
  Ҕ: 'Ӷ',
  ҕ: 'ӷ'
};

export const normalize = (s: string) => {
  const tokens = s.split('');
  let results: string[] = [];
  const numTokens = tokens.length;
  let i;
  let token;

  for (i = 0; i < numTokens; i++) {
    token = tokens[i];

    // @ts-ignore
    if (ConversionTable[token.toLocaleLowerCase()]) {
      // @ts-ignore
      results = results.concat(ConversionTable[token]);
    } else {
      results.push(token);
    }
  }

  return results.join('');
};

# natural-abh

=======

![Tests](https://github.com/asar-studio/natural-abh/workflows/Tests/badge.svg?branch=develop)
![Release Package to npm](https://github.com/asar-studio/natural-abh/workflows/Release%20Package%20to%20npm/badge.svg)
[![NPM version](https://img.shields.io/npm/v/natural-abh.svg)](https://www.npmjs.com/package/natural-abh)

"natural-abh" is a general natural language facility for nodejs. В настоящее время поддерживается: Tokenizing, normalizing and N-grams are currently supported.

It's still in the early stages, so we're very interested in bug reports, contributions and the like.

### TABLE OF CONTENTS

- [Installation](#installation)
- [Tokenizers](#tokenizers)
- [Normalizer](#normalizer)
- [N-Grams](#n-grams)

## Installation

You can install natural-abh via NPM like so:

    npm install natural-abh

or using yarn:

    yarn add natural-abh

If you're interested in contributing to natural, or just hacking on it, then by all means fork away!

## Tokenizers

Word anf RegExp are provided for breaking text up into arrays of tokens:

```javascript
const nabh = require('natural-abh');
const tokenizer = new nabh.WordTokenizer();
console.log(nabh.tokenize('Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// [ 'Аԥсны', 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ]
```

The other tokenizers follow a similar pattern:

```javascript
tokenizer = new nabh.AggressiveTokenizer();
console.log(tokenizer.tokenize('Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// [ 'Аԥсны', 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ]

tokenizer = new nabh.RegexpTokenizer({ pattern: /\-/ });
console.log(tokenizer.tokenize('Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// [ 'Аԥсны', 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ]

tokenizer = new nabh.WordPunctTokenizer();
console.log(tokenizer.tokenize('Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// [ 'Аԥсны', 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ]
```

## Normalizer

Replaces obsolete characters in a string with modern counterparts:

```javascript
const { normalize } = require('natural-abh');
console.log(normalize('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// "Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла"
```

## N-Grams

n-grams can be obtained for strings (which will be tokenized for you):

```javascript
const { bigrams, trigrams, ngrams } = nabh;
```

### bigrams

```javascript
console.log(bigrams('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
console.log(ngrams('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла', 2));
// [ [ 'Аҧсны', 'Аҳәынҭқарра' ], [ 'Аҳәынҭқарра', 'Ашьаустә' ], [ 'Ашьаустә', 'закәанеидкыла' ]  ]
```

### trigrams

```javascript
console.log(trigrams('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
console.log(ngrams('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла', 3));
// [ [ 'Аҧсны', 'Аҳәынҭқарра', 'Ашьаустә' ], [ 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ] ]
```

More use cases u can find reading tests


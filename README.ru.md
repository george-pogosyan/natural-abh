# natural-abh

=======

[![NPM version](https://img.shields.io/npm/v/natural-abh.svg)](https://www.npmjs.com/package/natural-abh)
![Tests](https://github.com/asar-studio/natural-abh/workflows/Tests/badge.svg?branch=develop)
![Release Package to npm](https://github.com/asar-studio/natural-abh/workflows/Release%20Package%20to%20npm/badge.svg)

"Natural" is a general natural language facility for nodejs. В настоящее время поддерживается: токенизация, нормализация, подсчёт N-грамм(биграммы, триграммы и мультиграммы).

Библиотека все еще на начальной стадии, поэтому мы очень заинтересованы в сообщениях об ошибках, помощь в реализации функционала и тд.

### Содержание

- [Установка](#установка)
- [Токенизатор](#токенизатор)
- [Нормалайзер](#нормалайзер)
- [N-граммы](#n-граммы)

## Установка

Вы можете установить natural-abh через NPM следующим образом:

    npm install natural-abh

Либо используя yarn:

    yarn add natural-abh

Если вы заинтересованы в том, чтобы внести свой вклад в natural-abh, создайте fork репозитория, добавьте свой функционал и создайте pull request для обсуждения!

## Токенизатор

Word и RegExp токенизаторы предназначены для разбиения текста на массивы токенов:

```javascript
const nabh = require('natural-abh');
const tokenizer = new nabh.WordTokenizer();
console.log(nabh.tokenize('Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// [ 'Аԥсны', 'Аҳәынҭқарра', 'Ашьаустә', 'закәанеидкыла' ]
```

Остальные токенизаторы следуют аналогичной схеме:

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

## Нормалайзер

Заменяет устаревшие символы в строке на современные аналоги:

```javascript
const { normalize } = require('natural-abh');
console.log(normalize('Аҧсны Аҳәынҭқарра Ашьаустә закәанеидкыла'));
// "Аԥсны Аҳәынҭқарра Ашьаустә закәанеидкыла"
```

## N-граммы

быдут получены для строк (которые будут токенизированы для вас):

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

# hryvna.js — вартість прописом

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![devDependency status][devdependency-image]][devdependency-url]

В українському документообороті необхідно писати суму прописом. Таке необхідно у договорах, актах, рахунках та ін.

### На сервері

#### Встановити через [npm](//npmjs.org)

```bash
$ npm i --save hryvnas
```

#### Как использовать

```js
var hryvnas = require('hryvnas').hryvnas;

var text = hryvnas(12.10);
console.log(text); // дванадцять гривень 10 копійок

var text = rubles("151,31");
console.log(text); // сто п'ятдесят одна гривня 31 копійка
```

----------------

### В браузері

#### Установити через [bower](http://bower.io)

```bash
$ bower install hryvnas --save
```

#### Подключити

```html
<script src="bower_components/hryvnas/lib/hryvnas.min.js"></script>
```

#### Використання

```html
<script>
var text = hryvnas(12.10);
console.log(text); // дванадцять гривень 10 копійок

var text = hryvnas("151,31");
console.log(text); // сто п'ятдесят одна гривня 31 копійка
</script>
```

----------------

### Знайшли помилку?

Будь ласочка, створіть тікет — https://github.com/tremez/hryvnas/issues

### Тестування

Для запуску тестів оновіть репозіторій та запустіть:

```bash
$ npm test
```

## Автор

* Taras Remez

## Ліцензія

Ліцензія MIT, дивіться файл `license.md`.

[npm-image]: https://img.shields.io/npm/v/hryvnas.svg?style=flat
[npm-url]: https://www.npmjs.com/package/hryvnas
[travis-image]: https://travis-ci.org/tremez/hryvnas.js.svg?branch=master
[travis-url]: https://travis-ci.org/tremez/hryvnas.js
[coveralls-image]: https://coveralls.io/repos/tremez/hryvnas.js/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/tremez/hryvnas.js?branch=master
[devdependency-image]: https://img.shields.io/david/dev/tremez/hryvnas.svg?style=flat
[devdependency-url]: https://david-dm.org/tremez/hryvnas#info=devDependencies

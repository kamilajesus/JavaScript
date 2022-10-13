# Number

```js
const meuNumero = 3

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero

console.log(operacaoMatematica) //console: 3
```

## Ponto flutuante

```js
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao) //console: 0.30303030303030304
```

## NaN
```js
|| Not a Number
|| Ele é retornado quando uma operação matemática falha ou quando uma função tenta transformar uma string em inteiro.

const alura = "Alura";
console.log(alura * primeiroNumero) // console: NaN
```
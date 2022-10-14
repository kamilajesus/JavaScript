## Var

- Declarações com var tem escopo global ou escopo de função/local.
- O escopo é global quando uma variável var é declarada fora de uma função. Isso significa que qualquer variável que seja declarada com var fora de um bloco de função pode ser utilizada na janela inteira.
- Var tem escopo de função quando é declarado dentro de uma função. Isso significa que ele está disponível e pode ser acessado somente de dentro daquela função.

```js
var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area) // 35

```

## let

- Let tem escopo de bloco.
- Um bloco é uma porção de código cercado por {}. Um bloco vive dentro dessas chaves. Tudo o que estiver cercado por chaves é um bloco.
- Assim, uma variável declarada com let em um bloco estará disponível apenas dentro daquele bloco.

```js
let forma = "retângulo"
let altura = 5;
let comprimento = 7;


if(forma === "retângulo"){
  area = altura * comprimento;
}else{
  area = (altura * comprimento) / 2
}
console.log(area) // Erro: não conseguimos acessar a variável area.
let area;

```

## Const

- variáveis declaradas com const mantêm valores constantes. 
- Assim como as declarações de let, as declarações de const somente podem ser acessadas dentro do bloco onde foram declaradas.
- Const sempre tem que iniciar com um valor.

```js
const forma = "quadrado"
const altura = 5;
const comprimento = 7;
const area; //area não pode ser uma constante, pois o valor dela tem que ser alterado

if(forma === quadrado){
  area = altura * comprimento;
}else {
  area = (altura * comprimento) / 2
}

console.log(area) // Error: Inicializador ausente na declaração const.
```


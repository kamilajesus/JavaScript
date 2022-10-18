# Métodos Callback

- Callback cria regras dentro de outras funções para que sejam utilizadas no futuro. Normalmente, ele age de forma assíncrona, ou seja, não é executado imediatamente. A aplicação continuará rodando enquanto espera o momento certo da sua execução.
- Enquanto o método forEach não tem um retorno, o método map() pode retornar um array se a função informada tiver um return em seu escopo.
- O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado. O que map() faz: percorre o array da esquerda para a direita invocando uma função de retorno em cada elemento com parâmetros. Para cada chamada de retorno, o valor devolvido se torna o elemento do novo array. Depois que todos os elementos foram percorridos, map() retorna o novo array com todos os elementos “traduzidos”.

## ForEach
```js
const nomes = ["Ana","Ju","Leo","Paula"]

nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome) // Ana, Ju, Leo, Paula
}
```

## Map
```js
const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas) // 10, 10, 9, 8, 7
```

```js
let nomes = ["ana Julia","Caio vinicius","BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados) //["ANA JULIA","CAIO VINICIUS","BIA SILVA"]
```
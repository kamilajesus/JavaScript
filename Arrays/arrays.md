## Arrays

- array é uma estrutura de dados simples presente na maioria das linguagens de programação. Seu principal objetivo é ser um espaço contínuo na memória para organizar e armazenar uma coleção de elementos.

- Assim, essas informações podem ser acessadas rapidamente por meio da indicação do índice da posição pretendida.

```js
//medias 10, 6.5, 8, 7.5

// let nota1 = 10
// let nota2 = 6.5
// let nota3 = 8
// let nota4 = 7.5

            // 0    1   2   3
const notas = [10, 6.5, 8, 7.5]

//let media = (nota1 + nota2 + nota3 + nota4)/4

let media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length

console.log(media) // 8
```
# Adicionando itens

```js
| Método push

const notas = [10 ,6 ,8]
notas.push(7)
console.log(notas) // [ 10, 6, 8, 7 ]

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media) //7.75
```

# Removendo itens

```js
| Método pop

const notas = [10 ,7 ,8, 5, 10]
notas.pop(5)
console.log(notas) // [ 10, 7, 8, 5 ]

let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
console.log(`A média é ${media}`) // A média é 7.5
```

# Dividindo arrays

```js
| Método Slice
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

console.log("tamanho da array:", nomes.length)
                        //0, 10
const sala1 = nomes.slice(0,nomes.length/2)
                        //10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
```

# Atualizando listas

```js
| Método Splice

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//inicio da alteração(ana), quantidade de itens que vão ser removidos(2 itens), itens que vão ser adicionados
listaDeChamada.splice(1,2,'Rodrigo')

console.log(`Lista de chamada: ${listaDeChamada}`) // Lista de chamada: 'João','Lara' ,'Marjorie','Leo'
```

# Concatenando arrays

```js
| Método concat

const salaDePython = ['Melissa','Helena','Rodrigo']

const salaDeJavaScript = ['Ju','Leo','Raquel']

const salasUnificadas = salaDePython.concat(salaDeJavaScript)

console.log(salasUnificadas) //  'Melissa', 'Helena', 'Rodrigo', 'Ju', 'Leo', 'Raquel'
```

# Lista de duas dimensões

```js
const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10,7,9,6]

// let listaDeAlunos = [['João', 'Juliana', 'Caio', 'Ana'], [10,7,9,6]]
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

console.log(`${listaDeNotasEAlunos[0][0]}, sua media é ${listaDeNotasEAlunos[1][0]}`)
//               [posição da array][posição dentro da array]
```

# Filtrando elementos

```js
const nomes = ['Ana','Marcos','Maria', 'Mauro']
const notas = [7, 4.5, 8, 7.5]

const reprovados = nomes.filter((_, indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`) // Marcos
```

# Somando com Reduce

```js
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala) {
    return notasDaSala.reduce((acum, atual) => atual + acum, 0) / notasDaSala.length
}

console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`)
console.log(`Média da sala Java ${mediaSala(salaJava)}`)
console.log(`Média da sala Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]

const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length

console.log(media)
```
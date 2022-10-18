## For

```js
const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++){
  console.log(i, numeros[i])//0 100
                            // 1 200
                            // 2 300
                            // 3 400
                            // 4 500
                            // 5 600

}
```

```js
const notas = [10, 6.5 ,8 ,7.5]

let somaDasNotas = 0

for (let i = 0; i < notas.length; i++){
  somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length

console.log(media)
```
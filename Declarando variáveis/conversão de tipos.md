## Conversão implícita 


```js
const numero = 234
const numeroString = "234"

console.log(numero === numeroString) // false
console.log(numero == numeroString) // true (a const numero ficou do tipo string)
console.log(numero + numeroString) // 234234 (a const numero ficou do tipo string e foi concatenada)
```
## Conversão explícita

```js
// Number()
// String()

const numero = 222
const numeroString = "222"

console.log(numero + Number(numeroString)) // 444


```
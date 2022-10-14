# truthy e falsy

```js
// 0 => false
// 1 => true

console.log(0 == false) // true
console.log("" == false) // true
console.log(1 == true) // true
```

## Undefined e Null

- Uma função retorna undefined se um valor não for retornado.
- Null aponta para um objeto inexistente, o vazio

```js
let minhaVariavel;
let varNull = null;

console.log(minhaVariavel) //undefined
console.log(varNull) // null
console.log(typeof minhaVariavel)// undefined
console.log(typeof varNull) // object
```

```js
typeof undefined   // undefined
null === undefined // falso
null  == undefined // verdadeir
```
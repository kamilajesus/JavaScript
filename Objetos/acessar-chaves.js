// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistemas e printar o resultado na tela.

const cliente = {
  nome: "Kamila",
  idade: 20,
  cpf: "12312312345",
  email: "kamila@gmail.com",
}

const chaves = ["nome","idade","cpf","email"]

console.log(cliente[chaves[0]])// Kamila

chaves.forEach(info => console.log(cliente[info])) //nome: Kamila, 20, 12312312345, kamila@gmail.com


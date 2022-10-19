// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Cliente

const cliente = {
  nome: "Kamila",
  idade: 20,
  cpf: ["12312312345", "123456764464"],
  email: "kamila@gmail.com",
  dependentes = [{
  nome: "Carlos",
  parestesco: "primo",
  dataNasc: "12/05/2002"
  }]
}

cliente.dependentes.push({
  nome: "Samia Maria",
  parentesco: "tia",
  dataNasci: "04/03/1969",
})

console.log(cliente)

const filhaMaisNova = clinte.dependentes.filter(dependente => dependente.dataNasc === "04/01/2012")

console.log(filhaMaisNova[0].nome)
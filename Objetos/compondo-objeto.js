// Adicionar dependentes para um dos clientes cadastrados, como nome, idade e parentesco

const cliente = {
  nome: "Kamila",
  idade: 20,
  cpf: "12312312345",
  email: "kamila@gmail.com",
}

cliente.dependentes = {
  nome: "Carlos",
  parestesco: "primo",
  dataNasc: "12/05/2002"
}

console.log(cliente)

cliente.dependentes.nome = "Carlos da Silva"

console.log(cliente)
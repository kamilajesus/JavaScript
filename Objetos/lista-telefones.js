// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de número em algum cadastro

const cliente = {
  nome: "Kamila",
  idade: 20,
  cpf: "12312312345",
  email: "kamila@gmail.com",
  fones: ["1234564354", "12345678"]
}

cliente.fones.forEach(fone => console.log(fone))
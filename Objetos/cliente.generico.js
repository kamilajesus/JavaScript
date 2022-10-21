// Gerar uma função que permita a criação de novos clientes a partir de um modelo.

function Cliente(nome, cpf, email, saldo){
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor){
    this.saldo += valor
  }
}

const andre = new Cliente("Kamila", "123456345", "kamila@gmail.com", 100)
// aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.

function Cliente(nome, cpf, email, saldo){
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function(valor){
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
  cliente.call(this.nome,cpf,email,saldo)
  this.saldoPoup = saldo
}

const ju = new ClientePoupanca("ju", "12345676543", "ju@gmail.com", 100, 200)

console.log(ju)

ClientePoupanca.prototype.depositarPoup = function(valor){
  this.saldoPoup += valor
}

ju.depositarPoup(30)

console.log(ju.saldoPoup)
# O que são objetos?

Um objeto é uma coleção de propriedades, uma propriedade é uma associação entre um nome (ou chave) e um valor. O conceito de objetos em JavaScript pode ser entendido com objetos tangíveis da vida real.

Para acessar dados em um objeto podemos usar as notações de ponto e de colchete.

Como variáveis ​​em JavaScript, o nome do objeto (que poderia ser uma variável normal) é um nome de propriedade diferente e diferente em propriedades/minúsculas (por exemplo, cor Cor e propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por exemplo, vamos criar um objeto chamado meuCarroe dar a ele as chamadas fabricacao, modelo, e ano.

Propriedades de objetos em JavaScript também podem ser acessadas ou alterações usando-se notação de colchetes. Objetos são às vezes chamados de arrays associativos , uma vez que cada propriedade é associada com um valor de string que pode ser usado para acessá-la. 

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. 

O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades. O objeto de protótipo de um objeto também pode ter um objeto de protótipo, do qual herda métodos e propriedades, e assim por diante. Isso geralmente é chamado de cadeia de protótipos e explica por que objetos diferentes têm propriedades e métodos definidos em outros objetos disponíveis para eles.

As propriedades e os métodos são definidos na propriedade prototype nas funções construtoras dos Objetos, não nas próprias instâncias do objeto.

Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.

# Orientação a Objetos

- A classe define os atributo(características) e os métodos(comportamentos) de um objeto.

- A herança é um mecanismo da OO que permite que uma classe herde características de um outra classe.

- Objeto é a instância de uma classe em mémoria.
// const notas = [4, 7, 9, 2, 10];

// const aprovados = notas.filter(n => n >= 7);
// console.log(aprovados); // [7, 9, 10]


// function dobro (aprovados){
//     const oi = [];
//     for (let i=0; i<3; i++){
//         oi[i]= aprovados[i]*2
//     }
//     return oi
// }

// const xx = dobro(aprovados)
// console.log(xx);


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Crie uma função chamada executarOperacao(a, b, operacaoCallback) que receba dois números e retorne o resultado de chamar a função operacaoCallback(a, b).

// function mult(a, b) {
//     return a * b
// }

// function soma(a, b) {
//     return a + b
// }

// function executarOperacao(a, b, operacaoCallback) {
//     return operacaoCallback(a, b)
// }

// console.log(executarOperacao(19, 20, mult))



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Dada a função formatarNome(nome), chame a função processarLista(lista, callback) passando a lista de alunos e o callback formatarNome.


// const nomesalunos = ['Lara', 'Laura', 'Miguel']

// function formatarNome(nome){
//     return 'Oi, ' + nome;
// }

// function processarLista (lista, callback){
//     for( let i = 0; i<nomesalunos.length; i++){
//         console.log(callback(nomesalunos[i]))
//     }
// }

// console.log(processarLista(nomesalunos, formatarNome))


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Use setTimeout dentro da função baixarArquivo(nomeArquivo, callbackFinal)
// para aguardar 1 segundo e executar o callback final.

// function baixarArquivo(nomeArquivo, callbackFinal){
//     console.log("Iniciando dowload...")

//     setTimeout(function(){
//     callbackFinal('Download de ' + nomeArquivo + ' concluído!')
// }, 1000);   
// }

// baixarArquivo("aula1.pdf", function(mensagem) {
//   console.log("NOTIFICAÇÃO: " + mensagem);
// });



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Crie uma função filtrarNumeros(lista, callbackCondicao) que percorra a lista e retorne um novo array apenas com os itens para os quais callbackCondicao(item) retornar true.

// function ePar(num) {
//   return num % 2 === 0;
// }

// function filtrarNumeros(lista, callbackCondicao) {
//   const resultado = [];
//   for (let i = 0; i < lista.length; i++) {
//     if (callbackCondicao(lista[i])) {
//       resultado.push(lista[i]);
//     }
//   }
//   return resultado;
// }

// const numeros = [1, 2, 3, 4, 5, 6];

// console.log(filtrarNumeros(numeros, ePar));



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Use o método nativo .map() passando um callback no formato arrow function para aplicar 10% de desconto em cada item da lista de preços (multiplicar por 0.9).

// const precos = [100, 200, 50, 80];
// const desconto = precos.map(preco => preco * 0.9);

// console.log(desconto);



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Complete a função validarEmail(email, callbackSucesso, callbackErro). Se o email contiver o caractere "@", invoque callbackSucesso(), senão invoque callbackErro().

// function validarEmail(email, callbackSucesso, callbackErro){
//     if (email.includes("@")){
//         callbackSucesso("Email válido")
//     }
//     else{
//         callbackErro("Email ínvalido")
//     }
// }

// function sucesso(msg){
//     console.log(msg)
// }

// function erro(msg){
//     console.log(msg)
// }

// validarEmail('laradacosta', sucesso, erro)


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Use o método .find() com um callback para encontrar o usuário com id === 2 na lista de usuários.

// const usuario = [
//     {id: 1, nome: 'Lara'},
//     {id: 2, nome: 'Laura'}
// ]

// const resultado = usuario.find(u => u.id === 2)

// console.log(resultado)



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Ordene os produtos do mais barato para o mais caro usando o método .sort() com uma função callback comparadora (a, b) => a.preco - b.preco.

// const produtos = [
//     {produto: 'geladeira', preco: 10},
//     {produto: 'computador', preco: 450},
//     {produto: 'gelo', preco: 230},
//     {produto: 'pao', preco: 5}
// ]

// produtos.sort((a,b) => a.preco - b.preco)

// console.log(produtos)



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Use .reduce() com um callback acumulador para somar todos os valores do carrinho de compras.

// const num = [90, 70, 60, 45, 42]
// const total = num.reduce((acumulador, numeros) => numeros + acumulador, 0)
// console.log(total)



// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Crie uma função formatarTexto(frase, callbackFormatador) que receba uma frase e retorne o resultado de chamar callbackFormatador(frase).

// function formatarTexto(frase, callbackFormatador){
//     callbackFormatador(frase)
// }

// function Laura(frase){
//     console.log("A Laura disse: " + frase)
// }

// formatarTexto('oioioii', Laura)
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




// Use setTimeout dentro da função baixarArquivo(nomeArquivo, callbackFinal)
// para aguardar 1 segundo e executar o callback final.

function baixarArquivo(nomeArquivo, callbackFinal){
    console.log("Iniciando dowload...")

    setTimeout(function(){
    callbackFinal('Download de ' + nomeArquivo + ' concluído!')
}, 1000);
}






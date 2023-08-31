"use strict"
/*O strict é uma nova feature do ECMAScript 5 que permite 
fazer que o código JavaScript rode em um modo mais rigoroso.
Neste modo, a engine de JavaScript tem seu comportamento modificado,
gerando erros que antes eram silenciados e, até mesmo, proibido
o uso de certas partes da linguagem que são tidas como
problemáticas, nos forçando assim a escrever um código de
melhor qualidadfe e ajudando a capturar bugs mais precocemente.

Resumindo, O grande benefício de se usar strict mode é
reduzir a chance de existirem no código bugs difíceis 
de localizar.*/

//Comentário de uma linha
/*
Comentario 
de 
multiplas linhas
*/
//alert("ok?");//exibe um alerta
//console.log("Alô mundo")//

var tamanho = 18;

tamanho = 10;
alert(tamanho);

if(true){
   //VAR , LET, CONST
   /*variáveis declaradas com a palavra-chave var podem ser
utilizadas mesmo antes de  sua declaração.*/
   var escopoFuncao = 20;

/*variáveis criadas com let só podem ser utilizadas após sua 
declaração, pois,  apesar de serem elevadas, elas não são inicializadas. */
   
let escopoBloco = 10;

/*Cosntantes também tem escopo de bloco.
Constantes devem ser inicializadas obrigatoriamente no momento de sua declarção.
Uma vez atribuído um valor a constante, este não pode ser alterado*/

   const endereco = "Rua D13, 10";
   endereco = "Rua E13, 20";//não vai funcionar
   const idade; //não vai funcionar, pois é preciso definir o valor

   //console.log(escopoFuncao);
   console.log(escopoBloco);
}

   //console.log(escopoFuncao);
   console.log(escopoBloco);



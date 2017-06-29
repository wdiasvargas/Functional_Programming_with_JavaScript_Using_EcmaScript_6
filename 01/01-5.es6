/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
/*
*Referential Transparency
*/

//De acordo com a definicao de funcoes
//toda funcao deve retornar um valor a partir da entrada
//chamamos essa propriedade de Transparencia Referencial
//função identity apenas atua como um espelho ou identidade
//retornando o que você está passando como sua entrada
//Funções que obedecem
//A transparência referencial dependerá apenas das entradas de seu argumento
let identity = (i) => i

sum(4,5) + identity(1)
sum(4,5) + 1


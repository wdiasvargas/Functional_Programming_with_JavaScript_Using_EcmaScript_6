/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';

//Calculate Tax Functions in ES6
//A programação funcional é um paradigma no qual estaremos criando
//Funções que irão descobrir a lógica dependendo apenas da sua entrada.
//Isso garante
//Que uma função, quando chamada várias vezes, retornará o mesmo resultado. A função
//Também não alterará nenhum dado no mundo exterior, levando a uma base de código compatível e compatível.

let calculateTax  = (value,percentValue) => value/100 * (100 + percentValue)

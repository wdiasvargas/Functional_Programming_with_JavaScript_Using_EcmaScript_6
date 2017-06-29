/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
/*
*Functional Programming Benefits
*/
/*
*Pure Functions
* As funções puras obedecem à transparência referencial.
* somente é uma função pura se dado uma entrada, retorna a mesma saída
*/

/*
*Pure Functions Lead to Testable Code
*Funções que não são puras têm efeitos colaterais
*
* "Função pura
* Também não deve mutar quaisquer variáveis ​​de ambiente externas "
*/
/*
*CODIGO RAZOAVEL/LEGIVEL/SIGNIFICATIVO
*/

let global = "globalValue"
let badFunction = value => (global = "changed") => value * 2

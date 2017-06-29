/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */

/*
 *Functional Programming Benefits
 */

/*
*Pipelines e Composable
*Com funçoes puras podemos componentizar e executar tarefas mais avançadas
*/
/*
* sistemas base UNIX usam essa filosofia de funcoes puras
* Composição é o coracao do paradigma funcional
*/
//cat jsBook | grep -i "composing" | wc
/*
*Em matemática, uma função é uma relação entre um conjunto de entradas e um conjunto de
 Saídas permitidas com a propriedade de que cada entrada está relacionada com exatamente uma saída.
 A entrada para uma função é chamada de argumento e a saída é chamada de valor
*/
/*
* O conjunto de todas as entradas permitidas para uma determinada função é chamado de domínio da função,
 Enquanto o conjunto de saídas permitidas é chamado de codomain.
 */
'use strict';

let longRunningFunction = ip => {
  //do long running tasks an return
}
let longRunningFnBookKeeper = {
  2:3,
  4:5
}
//check if the key present in longRunningFnBookKeeper
//if get back the result else update the bookkeeping object
longRunningFnBookKeeper.hasOwnProperty(ip)
  ?longRunningFnBookKeeper[ip]
  : longRunningFnBookKeeper[ip] = longRunningFunction(ip)

  
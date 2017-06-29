/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */

/*
 *Functional Programming Benefits
 */

/*
*Cacheavel
*Uma vez que a função pura vai sempre retornar a mesma saída para a entrada dada,podemos armazenar em cache as saídas da função
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
  
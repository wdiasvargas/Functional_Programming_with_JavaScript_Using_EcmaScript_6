/**
 * Created in 28/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */

/*
 *Functional Programming Benefits
 */

/*
 *Parallel Code
 * A função pura nos permite executar o código em paralelo
 */
'use strict';

let function1 =(input, global) => {
  //works on input
  //changes global
  global ="somethingElse"
}
let function2 =(global) => {
  if(global === "something") {
    //business logic
  }
}

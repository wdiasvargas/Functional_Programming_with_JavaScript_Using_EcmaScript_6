/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
let dataFn = () => {
  console.info("I'm a function")
}

let tellType = (arg) => {
  if(typeof arg == "function")
    arg()
  else
    console.info("The passed data is "+arg)
}
tellType(dataFn)
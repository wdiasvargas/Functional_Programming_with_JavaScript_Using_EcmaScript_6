/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';

let tellType = (arg) => {
  console.info(typeof arg)
}

let data = 1
tellType(data)

let dataFn = () => {
  console.info("I'm a function")
}
tellType(dataFn)

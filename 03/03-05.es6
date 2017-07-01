/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
const forEachObject = (obj,fn) => {
  for(var property in obj){
    if(obj.hasOwnProperty(property)){
      //chamando a funcao com chave e valor nos argumentos
      fn(property, obj[property])
    }
  }
}

let object =
{
  a:1,
  b:2
}
forEachObject(object,(k,v) => console.info(k + ":" +v))

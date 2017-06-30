/**
 * Created on 22/06/17
 * Author : William Dias
 * Github : @wdiasvargas
 **/
"use strict";
var simpleFn = () => { //escopo da funcao
  if(true) {
    let a = 1,
        b = 2;
    console.info(a)
    console.info(b)
  }//escopo do bloco if
  console.info(b)// function escopo
  console.info(a)// function escopo
}
//para multiplos statement encapsulamos com { }

/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
/*
 *EVERY function
 */
'use strict';
const some = (arr,fn) => {
  let result = false;
  for(const value of arr)
    result = result || fn(value)
  return result
}

/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
const every = (arr,fn) => {
  let result = true;
  for(let i=0;i<arr.length;i++)
    result = result && fn(arr[i])
  return result
}
console.info(every([NaN, NaN, NaN], isNaN))
console.info(every([NaN, NaN, 4], isNaN))

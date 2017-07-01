/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
const unless = (predicate, fn) => {
  if(!predicate)
    fn()
}
const forEach = (array,fn) => {
  let i;
  for (i = 0; i < array.length; i++)
    fn(array[i])
}

forEach([1,2,3,4,5,6,7],(number) => {
  unless((number % 2),() => {
    console.info(number, " is even")
  })
})

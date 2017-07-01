/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
const times = (times, fn) => {
  for(let i = 0; i < times; i++)
    fn(i);
}
const unless = (predicate, fn) => {
  if(!predicate)
    fn()
}
times(100,function(n){
  unless(n % 2, function(){
    console.info(n,"is even");
  });
});

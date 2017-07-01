/**
 * Created in 30/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
/*
 *EVERY function
 */
'use strict';

let fruit = [
  'cherries',
  'apples',
  'bananas'
];
console.info(fruit.sort())
arr.sort([compareFunction])
// function compare(a, b){
// if(a is less than b by some ordering criterion) {
//   return -1;
//   }
//   if(a is greater than b by the ordering criterion) {
//   return 1;
//   }
//   //a must be equal to b
//   return 0;
// }

let people = [
  {firstname: "aaFirstName", lastname: "cclastName"},
  {firstname: "ccFirstName", lastname: "aalastName"},
  {firstname: "bbFirstName", lastname: "bblastName"}
];

people.sort((a, b)=> {
  return (a.firstname < b.firstname)
    ? -1
    :(a.firstname > b.firstname)
      ? 1
      : 0})


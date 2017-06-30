/**
 * Created in 29/06/2017.
 * Author: William Dias Vargas
 * Github: @wdiasvargas
 */
'use strict';
const forEach = (array,fn) => {
  let i;
  for (i = 0; i < array.length; i++)
    fn(array[i])
}
export default forEach
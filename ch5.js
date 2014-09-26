// Eloquent Javascript Chapter 5: Higher-Order Functions
// http://eloquentjavascript.net/05_higher_order.html

// Exercise 1: Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];
// goal -> [1, 2, 3, 4, 5, 6]

function flatten(array) {
  var arr = array.reduce( function(a,b){
    return a.concat(b);
  });

  return arr;
}



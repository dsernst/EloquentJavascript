// Eloquent Javascript, Chapter 4
// http://eloquentjavascript.net/04_data.html


// Exercise 1: The Sum of a Range

function sum(arr) {
  var sum = 0;
  for ( var i = 0; i < arr.length ; i++) {
    sum += arr[i];
  }
  return sum;
}


// needs adjustment to work for negative steps

function range(start,end,step) {
  var arr = [];
  if ( step == undefined) { var step = 1 };

  for ( var i = 0; i - 1 < (end - start); i += step ) {
    arr.push(start + i);
  }
    return arr;
}




// Exercise 2: Reversing an Array

function reverseArray(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length ; i++ ) {
    newArray.unshift(arr[i]);
  }

  return newArray;

}


// This one doesn't seem to work correctly:

function reverseArrayInPlace(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length ; i++ ) {
    newArray.unshift(arr[i]);
  }

  arr = newArray;

}



// Exercise 3: A List

function prepend(element, current) {
  return {value: element, rest: current}
}


function arrayToList(arr) {
  var list = {value: arr[arr.length - 1] , rest: null };
   
  for (i = 1; i < arr.length ; i++ ) {
    list = prepend( arr[arr.length - 1 - i] , list);
  }

  return list;
}


function nth(list, number) {
  if (list === null) {
    return undefined;
  }
  else if (number == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, number - 1);
  }
}


function listToArray(list) {
  var arr = [];
  var i = 0;
  var x = nth(list, i) ;

  while (x !== undefined) {
    arr.push(x);
    i++;
    x = nth(list, i);
  }

  return arr;
}




// Exercise 4: Deep Comparison

function deepEqual(a,b) {
  if (typeof(a) == "object" && typeof(b) == "object"){
    if (a === null && b === null) {
      return true;
    }
    else {
      for (var i in a) {
        if ( deepEqual(a[i],b[i]) ) {
          return true;
        }
        else {
          return false;
        }
      }
    }
  }
  else if (a === b){
    return true;
  }
  else {
    return false;
  }
}

// wow! can't believe that function actually worked.
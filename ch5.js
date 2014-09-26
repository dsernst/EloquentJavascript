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


// Exercise 2: Mother-Child Age Difference
// this one's tough, looked at Hint.

// Given function:
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Given object:
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Given function:
function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}


function avgMaternalAge(dataSet) {
  var ages = [];

  function hasKnownMother(person){
    if ( byName[ byName[person].mother ] ) {
      return true;
    }
    else {
      return false;
    }
  }


  function mothersAge(p){
    return byName[p].mother.born - byName[p].born;
  }

  function whatsMothersAge(person){
    ages.push(mothersAge(person))
  }

  byName.map(ages);

  return average(ages);
}


// The above definitely doesn't work yet... skipping for now.


// Exercise 3: Historical Life Expectancy
// Goal: Find avg historical life expectancy by century
// each person -> calc lifespan, group into century array
// each century -> reduce to averages

function deathCentury(person){
  return Math.ceil(person.died / 100);
}

function lifespan(person){
  return person.died - person.born;
}

function groupBy(array, func){
  var sorted = {};

  array.forEach( function(element, index){
    if ( !sorted.hasOwnProperty( func(element) ) ) {
      sorted[ func(element) ] = [ element ];
    }
    else {
      sorted[ func(element) ].push( element );
    }
  });

  return sorted;
}

byName.map(lifespan)

// groupBy now works. haven't finished problem though.


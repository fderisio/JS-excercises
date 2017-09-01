// 1)
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args);
  };
}


// 2)
function array_diff(a, b) {
  for (let i=0; i<a.length; i++) {
    if (a[i] === b[0]) {
      a.splice(i, 1);
    }
  }
  return a;
}
//console.log(array_diff([1,2],[1])) // --> [2]


// 3)
function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

// 4)
function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return true;
}
//console.log(isPrime(7)); // --> true


// 5)
function gap(g, m, n) {
	let value = m;
	let lastValue = 0;
	for (let i = 0; i <= n-m; i++) {
	    if (isPrime(value) && value - lastValue === g) {
	    	return [lastValue, value];
	    } else if (isPrime(value)) {
	    	lastValue = value;
	    }
	    value++;
	}
	return null;
}
// console.log(gap(4, 130, 200)); // --> [163, 167]
// console.log(gap(2, 5, 7)); // --> [5, 7]
// console.log(gap(10,300,400)) // --> [337, 347]


// 6)
function sumDigPow(a, b) {
  let result = [];
  for (let i=a; i<b; i++) {
  	if (i < 10) {
  		result.push(i);
  	} else {
  		let numArray = (""+i).split("");
  		let total = 0;
  		for (let j=0; j<numArray.length; j++) {
  			total += Math.pow(numArray[j], j+1);
  		}
  		if ( i === total ) { result.push(i) }
  	}
  }
  return result;
}
//console.log(sumDigPow(1, 10)); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(sumDigPow(1, 100)); // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]


// 7) 
function findUniq(arr) {
  let sortArray = arr.sort();
  for (let i=0; i<sortArray.length; i++) {
  	if (i=== 0 && sortArray[i] !== sortArray[i+1]) {
  		return sortArray[i];
  	} else if (sortArray[i] !== sortArray[i+1]) {
  		return sortArray[i+1];
  	}
  }
}
//console.log(findUniq([ 2, 1, 1, 1, 1, 1 ])) // ==> 2
//console.log(findUniq([ 0, 0, 0.55, 0, 0 ])) // ==> 0.55

var obj = { 0: 'a', 1: 'b', 2: 'c' };
//console.log(Object.values(obj)); // ['a', 'b', 'c']
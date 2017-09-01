function isSortedAndHow(array) {
	console.log(array.sort())
	console.log(array.reverse())
  if (array.sort() === array) {
  	return "yes, ascending";
  } else if (array.sort().reverse() === array) {
  	return "yes, descending";
  } else {
  	return "no";
  }
}
//console.log(isSortedAndHow( [15, 7, 3, -8] ));

function sumDigits(number) {
  let numArray = (""+number).replace(/[-]/g, "").split("");
  let result = 0;
  for (let i=0; i<numArray.length; i++) {
    result += parseInt(numArray[i]);
  }
  return result;
}
// console.log(sumDigits(10)); // --> 1
// console.log(sumDigits(123)); // --> 6

function expandedForm(num) {
  let numLength = num.toString().length;
  let numArray = (""+num).split("");
  let result = [];
  console.log(numArray)
  for (let i=0; i<numArray.length; i++) {
  	let newNum = numArray[i] * (Math.pow(10, numLength-(i+1)));
		if (newNum !== 0) {
			result.push(newNum);
		}
  }
  return result.join(" + ")
}	
//console.log(expandedForm(70304)); // --> 70000 + 300 + 4
//console.log(expandedForm(156322)); // --> 100000 + 50000 + 6000 + 300 + 20 + 2
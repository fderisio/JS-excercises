function iqTest(numbers){
  let numsArray = numbers.split(" ");
  let evenArray = [];
  let oddArray = [];

  for (let i=0; i<numsArray.length; i++) {
  	if (parseInt(numsArray[i]) % 2 === 0) {
  		evenArray.push(i);
  	} else if (parseInt(numsArray[i]) === 2) {
  		evenArray.push(i);
  	} else {
  		oddArray.push(i);
  	}
  }
  if (evenArray.length < oddArray.length) {
  	return evenArray[0] + 1;
  } else {
  	return oddArray[0] + 1;
  }
}

console.log(iqTest("2 4 7 8 10")) // => 3 // Third number is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")) // => 2


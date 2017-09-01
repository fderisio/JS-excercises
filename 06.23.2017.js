function countSheeps(arrayOfSheep) {
	let count = 0;
	for (let i=0; i<arrayOfSheep.length; i++) {
		if (arrayOfSheep[i] === true) {
			count ++;
		}
	}
	return count;
}
// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]));



function getCount(str) {
  let vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount === null ? 0 : vowelsCount.length;
}
//console.log(getCount("hola"));
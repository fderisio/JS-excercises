function nbYear(p0, percent, aug, p) {
	let pop = 0;
	let years = 0;
	while (pop < p) {
		pop = p0 + (p0 * (percent/100)) + aug;
		p0 = pop;
		years ++;
	}
	return years; 
}
// console.log(nbYear(1500, 5, 100, 5000)) // --> 15
// console.log(nbYear(1000, 2, 50, 1200)) // --> 3


function longest(s1, s2) {  
  let newArray = s1.concat(s2).split("").sort();
  let result = [];
  for (let i=0; i<newArray.length; i++) {
  	if (result.indexOf(newArray[i]) === -1) {
  		result.push(newArray[i]);
  	}
  }
  return result.join("");
}
//console.log(longest("aretheyhere", "yestheyarehere")) // --> "aehrsty"
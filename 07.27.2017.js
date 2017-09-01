// 1) calculation
find_the_ball=function(start,swaps){
  if (swaps.length === 0) {
    return start;
  } else {
  	if (swaps.length > 2 && swaps[swaps.length-2][1] === swaps[swaps.length-3][1]) {
    	return swaps[swaps.length-2][0];
   	} else if (swaps.length <= 2 && swaps[1][1] === swaps[0][1]) {
   		return swaps[swaps.length-2][1];
   	}
  }
}

let swaps = [[0, 1], [2, 1]];
//console.log(find_the_ball(0, swaps));


// 2) convert camelCaseString into camel-case-string
function kebabize(str) {
  const string = str.split("");
  const result = [];
  for (let i=0; i<string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result.push("-", string[i].toLowerCase());
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
}
//console.log(kebabize("myCamelCasedString"))


// 3) auto-complete function
function autocomplete(input, dictionary){
  const wordLength = input.length;
  const result = [];
  dictionary.map(function(x) {
    if (x.replace(/[0-9][&\/\\#,+()$~%.'":*?<>{}]/g, '').substring(0, wordLength) == input) { 
      result.push(x);
    }
  });
  if (result.length > 5) {
  	return result.slice(0, 5)
  } else {
  	 return result;
  }
}
//console.log(autocomplete('air', ['airplane','airport','apple','ball'])); // = ['airplane','airport'])
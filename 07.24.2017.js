function solution(string) {
    let str = string.split("");
    console.log(str)
    for (let i=0; i<str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        str.splice(i, 0, " ");
        i++;
      }
    }
    return str.join("");
}

console.log(solution("holaComo"))
function order(words){
  const str = words.split(" ");
  let obj = {};
  for (let i=0; i<str.length; i++) {
    obj[str[i].match(/\d+/)[0]] = str[i];
  }
  const sortable = [];
  for (let i in obj) {
      sortable.push([i, obj[i]]);
  }
  sortable.sort(function(a, b) {
      return a[1] - b[1];
  });
  const result = [];
  for (let i=0; i<sortable.length; i++) {
    result.push(sortable[i][1]);
  }
  return result.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"))
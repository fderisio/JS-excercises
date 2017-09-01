function incrementString (strng) {
  let nums = strng.match(/\d+/g);
  if (nums === null ) {
    return strng + "1";
  }
  let newnum = nums++;
  if (nums.length === newnum.length) {
    return strng.replace(/\d+/g, nums);
  }
  
  if (nums.length > newnum.length) {
    return strng.replace(/\d+/g, nums);
  }
  
}

console.log(incrementString("foobar000")) //, "foobar001");
console.log(incrementString("foo")) //, "foo1");
console.log(incrementString("foobar001")) //, "foobar002");
console.log(incrementString("foobar99")) //, "foobar100");
console.log(incrementString("foobar099")) //, "foobar100");
console.log(incrementString("")) //, "1");
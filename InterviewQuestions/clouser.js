
//Q1.--------------------------------------------------------------------
// what is scope chain => the order in which variable are access local scope to global scope first num -> then -> name -> then -> username 
var username="tushar";
function init() {
    let name = "Mozilla";
       function displayName(num) {
       console.log(name,username,num); 
  }
  return displayName;
}
init()(5);
//exa-2
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4));
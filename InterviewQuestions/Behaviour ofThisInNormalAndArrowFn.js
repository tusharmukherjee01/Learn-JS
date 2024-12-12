// Object with a regular function and an arrow function as methods
const obj = {
  name: 'Tushar',
  regularFunction: function () {
    console.log('Regular Function:', this.name);
  },
  arrowFunction: () => {
    console.log('Arrow Function:', this.name);
  }
};

// Calling methods
obj.regularFunction(); // Output: "Regular Function: Tushar"
obj.arrowFunction();   // Output: "Arrow Function: undefined" (or empty in strict mode)

//-----------------------------------------------------------------------------

const obj2 = {
  name: 'Mukherjee',
  regularFunction: function () {
    // Regular function inside another regular function
    function innerFunction() {
      console.log('Inner Function (Regular):', this.name);
    }
    innerFunction();
  },
  arrowFunction: function () {
    // Arrow function inside a regular function
    const innerArrowFunction = () => {
      console.log('Inner Function (Arrow):', this.name);
    };
    innerArrowFunction();
  }
};

// Calling methods
obj2.regularFunction(); // Output: "Inner Function (Regular): undefined" 
obj2.arrowFunction();   // Output: "Inner Function (Arrow): Mukherjee"

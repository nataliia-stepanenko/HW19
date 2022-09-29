// 1 
let i = 0;
let set = (num) => i += num;

let add = (num) => i += num;
let sub = (num) => i -= num;
let mult = (num) => i *= num;
let div = (num) => i /= num;

module.exports = {
    set,
    add,
    sub,
    mult,
    div,
};

// 2
// class Calculator {
//     i = 0;
//     set(num) {
//         this.i += num;
//         return this.i;
//     }
    
//     add(num) { 
//         this.i += num;
//         return this.i;
//     };

//     sub(num) {
//         this.i -= num;
//         return this.i
//     };
    
//     mult(num) {
//         this.i *= num;
//         return this.i;
//     };
    
//     div(num) {
//         this.i /= num;
//         return this.i;
// }
// }

// let calculator = new Calculator;
// module.exports = calculator;

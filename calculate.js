// class Queue {
//   constructor() {
//     this.storage = [];
//   }

//   push(val) {
//     this.storage.unshift(val);
//   }

//   pop() {
//     return this.storage.pop();
//   }

//   peek() {
//     return this.storage[this.storage.length - 1];
//   }

//   isEmpty() {
//     return this.storage.length === 0;
//   }

//   size() {
//     return this.storage.length;
//   }
// }

// class Stack {
//   constructor() {
//     this.storage = [];
//   }

//   push(val) {
//     this.storage.push(val);
//   }

//   pop() {
//     return this.storage.pop();
//   }

//   peek() {
//     return this.storage[this.storage.length - 1];
//   }

//   isEmpty() {
//     return this.storage.length === 0;
//   }

//   size() {
//     return this.storage.length;
//   }
// }

  // var pemdas = {
  //   '*': 4,
  //   '/': 3,
  //   '+': 2,
  //   '-': 1,
  // };

var calculate = (s) => {
  s = s.replace(/\s/g, '');

  var pemdas = ['*', '/', '+', '-'];

  const doMath = (a, b, operator) => {
    if (typeof a === 'string') a = parseInt(a);
    if (typeof b === 'string') b = parseInt(b);
    if (operator === '*') return a * b;
    else if (operator === '/') return a / b;
    else if (operator === '+') return a + b;
    else return a - b;
  }


  var nums = s.replace(/[-\*\+\/]/g, '  ').split(' ')
  var ops = s.replace(/[0-9]/g, ' ').split(''); /*replace(/[0-9]/g, '')*/
  // console.log('nums', nums)
  // console.log('ops', ops)
  while (nums.length > 1) {
    // pemdas.forEach(operator => {
      ops.forEach((char, i) => {
        if (pemdas.includes(char)) {
          var a = nums[i - 1];
          var b = nums[i + 1];
          var res = doMath(a, b, char);
          // console.log('a', a)
          // console.log('b', b)
          // console.log('res', res)
          nums.splice(i - 1, 3, res);
          ops.splice(i - 1, 2)
          // console.log('ops', ops)
          // console.log('nums', nums)
        }
      })
    // })
  }

  console.log('result: ', parseInt(nums.join('')));
  return parseInt(nums.join(''));

};


// NEED TO ROUND DOWN, DOESN'T CARE ABOUT PEMDAS

// console.log(calculate('1 + 1') === 2);
// console.log(calculate('2 + 6 / 3') === 4)
// console.log(calculate('42') === 42)
// console.log(calculate('0-2147483647') === -2147483647)
// console.log(calculate('1+1+1') === 3)
// console.log(calculate('1-1+1') === 1)
// console.log(eval('1-1/2'))
console.log(eval('3-2/2'))
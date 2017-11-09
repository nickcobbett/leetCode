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

  const doMath = (a, b, operator) => {
    if (typeof a === 'string') a = parseInt(a);
    if (typeof b === 'string') b = parseInt(b);
    if (operator === '*') return a * b;
    else if (operator === '/') return Math.floor(a / b);
    else if (operator === '+') return a + b;
    else return a - b;
  }

  var _nums = s.replace(/[-\*\+\/]/g, ' ').split(' ');
  var _ops = s.replace(/[0-9]/g,  '').split('');
  var nums = [];
  var ops = [];
  for (var i = 0; i < _ops.length; i++) {
    ops.push('');
    ops.push(_ops[i]);
  }

  for (var k = 0; k < _nums.length; k++) {
    nums.push(_nums[k]);
    nums.push('');
  }
  ops.push(nums.pop());
  // console.log('nums', nums)
  // console.log('ops ', ops)

  while (nums.length > 1) {
    for (var i = 0; i < ops.length - 1; i++) {
      if (ops[i] === '*' || ops[i] === '/') {
        nums.splice(i - 1, 3, doMath(nums[i - 1], nums[i + 1], ops[i]))
        ops.splice(i - 1, 2)
      }
      // console.log(nums)
    }

   for (var i = 0; i < ops.length - 1; i++) {
      if (ops[i] === '+' || ops[i] === '-') {
        nums.splice(i - 1, 3, doMath(nums[i - 1], nums[i + 1], ops[i]))
        ops.splice(i - 1, 2)
      }
      console.log(nums)
    }
  }

  console.log('result: ', parseInt(nums.join('')));
  return parseInt(nums.join(''));

};

// console.log(calculate("3+2*2") === 7);
// console.log(calculate(" 3/2 ") === 1);
// console.log(calculate(" 3+5 / 2 ") === 5);
// console.log(calculate("12-3*4") === 0);
// console.log(calculate('1 + 1') === 2);
// console.log(calculate('2 + 6 / 3') === 4)
// console.log(calculate('42') === 42)
// console.log(calculate('0-2147483647') === -2147483647)
// console.log(calculate('1+1+1') === 3)
// console.log(calculate('1-1+1') === 1)
// console.log(calculate("14/3*2") === 8)
console.log(calculate("100-1-2-3-4-5-6-7-8-9-10") === 45)
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
  // var pemdas = ['*', '/', '+', '-'];
  const doMath = (a, b, operator) => {
    if (typeof a === 'string') a = parseInt(a);
    if (typeof b === 'string') b = parseInt(b);
    if (operator === '*') return a * b;
    else if (operator === '/') return Math.floor(a / b);
    else if (operator === '+') return a + b;
    else return a - b;
  }

  var nums = s.replace(/[-\*\+\/]/g, '  ').split(' ');
  var opsFiltered = s.replace(/[0-9]/g, '').split(''); /*replace(/[0-9]/g, '')*/

  var ops = nums.map(char => {
    if (!isNaN(parseInt(char))) {
      return '';
    } else {
      return opsFiltered.shift();
    }
  })
  // console.log('nums', nums)
  // console.log('ops', ops)
  while (nums.length > 1) {

    // pemdas.forEach(operator => {
      ops.forEach((char, i) => {
        if (char === '*' || char === '/') {
          var a = nums[i - 1];
          var b = nums[i + 1];
          var res = doMath(a, b, char);
          // console.log('a', a)
          // console.log('b', b)
          // console.log('res', res)
          nums.splice(i - 1, 3, res);
          ops.splice(i - 1, 2)
          // console.log('nums', nums)
          // console.log('ops', ops)
        }
      })

      ops.forEach((char, i) => {
        if (char === '+' || char === '-') {
          var a = nums[i - 1];
          var b = nums[i + 1];
          var res = doMath(a, b, char);
          // console.log('a', a)
          // console.log('b', b)
          // console.log('res', res)
          nums.splice(i - 1, 3, res);
          ops.splice(i - 1, 2)
          console.log('nums', nums)
          // console.log('ops', ops)
        }
      })
    // })
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
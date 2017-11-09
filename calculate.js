class Queue {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.unshift(val);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  size() {
    return this.storage.length;
  }
}

class Stack {
  constructor() {
    this.storage = [];
  }

  push(val) {
    this.storage.push(val);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  size() {
    return this.storage.length;
  }
}

var calculate = (s) => {
  var pemdas = {
    '*': 4,
    '/': 3,
    '+': 2,
    '-': 1,
  }

  const doMath = (a, b, operator) => {
    // console.log('AAA', a)
    // console.log('BBB', b)
    if (!a || !b || !operator) return a || b;
    else if (pemdas[operator] === 4) return a * b;
    else if (pemdas[operator] === 3) return a / b;
    else if (pemdas[operator] === 2) return a + b;
    else return a - b;
  }

  var numStack = new Stack();
  var operStack = new Stack();
  var lastOperator = 0;

  while (s.length) {
    var val = s[0];
    // console.log('val', val)

    if (pemdas[val] && operStack.isEmpty()) { // if it's an operator
      operStack.push(val);



    } else {
      numStack.push(parseInt(val));
    }
    // evaluate and push result into numStack
    var b = numStack.pop();
    var a = numStack.pop();
    console.log('a', a)
    console.log('b', b)
    var operator = operStack.pop();
    console.log('operator', operator)
    var res = doMath(a, b, operator);
    console.log('res', res)
    numStack.push(res);


    s = s.slice(1);
    s = s.trim();
  }
  console.log(numStack)

};

var s = '1 + 1';
// console.log(calculate(s));
console.log(calculate('2 + 6 / 3'))

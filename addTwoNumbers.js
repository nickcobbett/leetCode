// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


/**
 * Definition for singly-linked list.
 */


/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var ListNode = function(val) {
  this.val = val;
  this.next = null;
};


// takes arrays, returns arrays
var addTwoNumbers = function(l1, l2) {
  var convertListToArray = (list) => {
    var listArray = [];
    var node = list;
    while (node) {
      listArray.push(node.val);
      node = node.next;
    }
    return listArray;
  };

  var l1Array = convertListToArray(l1);
  var l2Array = convertListToArray(l2);
  var longerArray = l1Array;
  var shorterArray = l2Array;

  if (l1Array.length < l2Array.length) {
    longerArray = l2Array;
    shorterArray = l1Array;
  }

  var result = [];

  for (var i = 0; i < longerArray.length; i++) {
    var sum = longerArray[i] + (shorterArray[i] || 0);
    if (sum >= 10) {
      longerArray[i + 1] = (longerArray[i + 1] || 0) + 1;
      sum -= 10;
    }
    result.push(sum);
  }

  return result;

};


//takes linkedlist
// var addTwoNumbers = function(l1, l2) {
//   var getNumFromList = (list) => {
//     var listArray = [];
//     var node = list;
//     while (node) {
//       listArray.push(node.val);
//       node = node.next;
//     }
//     return parseInt(listArray.reverse().join(''));
//   };
//   var sum = getNumFromList(l1) + getNumFromList(l2);
//   // returning array to pass tests
//   console.log(sum);
//   return ('' + sum).split('').reverse().map(char => parseInt(char));
//     // this is to return a list like the question asked
// //   var buildReverseListFromNum = (num) => {
// //     var numArr = ('' + num).split('');
// //     console.log(numArr);
// //     var list = new ListNode(numArr.pop());
// //     var node = list;
// //     while (numArr.length) {
// //       node.next = new ListNode(numArr.pop());
// //       node = node.next;
// //     }
// //     return list;
// //   };
// //   return buildReverseListFromNum(sum);
// };



var l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
// console.log(l1);
// console.log(addTwoNumbers(l1, l2));
console.log(addTwoNumbers(new ListNode(5), new ListNode(5)));
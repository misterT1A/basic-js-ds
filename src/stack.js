const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.root = [];
  }

  push(element) {
    this.root.push(element);
  }

  pop() {
    const elem = this.root[this.root.length - 1];
    if (elem) {
      return this.root.pop(elem);
    }
    return elem;
  }

  peek() {
    return this.root[this.root.length - 1];
  }
}

module.exports = {
  Stack,
};

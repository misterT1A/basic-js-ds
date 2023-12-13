const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.rootNode = null;
  }

  getUnderlyingList() {
    const result = {
      value: this.rootNode.value,
      next: this.rootNode.next,
    };

    return result;
  }

  enqueue(value) {
    this.rootNode = addElem(this.rootNode, value);

    function addElem(node, value) {
      if (!node) {
        return new ListNode(value);
      }

      node.next = addElem(node.next, value);

      return node;
    }
  }

  dequeue() {
    const topRoot = this.rootNode;
    this.rootNode = this.rootNode.next;
    return topRoot.value;
  }
}

module.exports = {
  Queue,
};

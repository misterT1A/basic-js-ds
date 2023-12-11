const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }

  root() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here

    // return this.mainRoot;
  }

  add(data) {
    this.mainRoot = addCheck(this.mainRoot, data);

    function addCheck(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.value === data) {
        return node;
      }

      if (data < node.value) {
        node.left = addCheck(node.left, data);
      } else {
        node.right = addCheck(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchNode(this.mainRoot, data);

    function searchNode(node, data) {
      if (!node) {
        return falsse;
      }

      if (node.value === data) {
        return true;
      }

      return data < node.value
        ? searchNode(node.left, data)
        : searchNode(node.right, data);
    }
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

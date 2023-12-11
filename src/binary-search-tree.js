const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(newData) {
    this.rootNode = addCheck(this.rootNode, newData);

    function addCheck(node, newData) {
      if (!node) {
        return new Node(newData);
      }

      if (node.data === newData) {
        return node;
      }

      if (newData < node.data) {
        node.left = addCheck(node.left, newData);
      } else {
        node.right = addCheck(node.right, newData);
      }

      return node;
    }
  }

  has(newData) {
    return searchNode(this.rootNode, newData);

    function searchNode(node, newData) {
      if (!node) {
        return false;
      }

      if (node.data === newData) {
        return true;
      }

      return newData < node.data
        ? searchNode(node.left, newData)
        : searchNode(node.right, newData);
    }
  }

  find(newData) {
    let nodeResult = null;
    doLeftTraverse(this.rootNode, newData);
    return nodeResult;

    function doLeftTraverse(node, newData) {
      if (node) {
        if (node.data === newData) {
          nodeResult = node;
        }
        doLeftTraverse(node.left, newData);

        doLeftTraverse(node.right, newData);
      }
      return null;
    }
  }

  remove(newData) {
    this.rootNode = removeNode(this.rootNode, newData);

    function removeNode(node, newData) {
      if (!node) {
        return null;
      }

      if (newData < node.data) {
        node.left = removeNode(node.left, newData);
        return node;
      } else if (newData > node.data) {
        node.right = removeNode(node.right, newData);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minInRight = node.right;
        while (minInRight.left) {
          minInRight = minInRight.left;
        }

        node.data = minInRight.data;

        node.right = removeNode(node.right, minInRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

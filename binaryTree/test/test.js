var tree = require('../binaryTree');
var assert = require('assert');
var myTree = tree.myTree;

describe(`Binary Tree`, () => {
    after(() => myTree.clear());

    it(`toArray`, () => {
        var actual = myTree.toArray();
        var result = [2, 3, 4, 5, 6, 7, 8];

        assert.deepEqual(actual, result);
    })

})


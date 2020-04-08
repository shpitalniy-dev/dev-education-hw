const assert = require('assert');
const arrList = require('../arrayList');
const linkList = require('../linkedList');
const tryLinkList = require('../tryLinkedList');

describe('Test of ArrayList methods ', () => {
    it(`init`, () => {
        arrList.myArrayList.init([1,2,3]);
        let actual = arrList.myArrayList.array;
        let expected = [1,2,3];

        assert.deepEqual(actual, expected);
    })

    it(`getSize`, () => {
        let actual = arrList.myArrayList.getSize();
        let expected = 3;

        assert.equal(actual, expected);
    })

    it(`push`, () => {
        let actual = arrList.myArrayList.push(4);
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`pop`, () => {
        let actual = arrList.myArrayList.pop();
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`unshift`, () => {
        let actual = arrList.myArrayList.unshift(4);
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`shift`, () => {
        let actual = arrList.myArrayList.shift();
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`slice`, () => {
        let actual = arrList.myArrayList.slice(1);
        let expected = [2,3];

        assert.deepEqual(actual, expected);
    })

    it(`splice`, () => {
        let actual = arrList.myArrayList.splice(1,2,2,3);
        let expected = [2,3];

        assert.deepEqual(actual, expected);
    })

    it(`sort`, () => {
        let actual = arrList.myArrayList.sort((a, b) => a > b ? false : true);
        let expected = [3,2,1];

        assert.deepEqual(actual, expected);
    })

    it(`get`, () => {
        let actual = arrList.myArrayList.get(0);
        let expected = 3;

        assert.equal(actual, expected);
    })

    it(`set`, () => {
        arrList.myArrayList.set(3, 0);
        let actual = arrList.myArrayList.array;
        let expected = [3,2,1,0];

        assert.deepEqual(actual, expected);
    })

    it(`toString`, () => {
        let actual = arrList.myArrayList.toString();
        let expected = "3,2,1,0";

        assert.equal(actual, expected);
    })
})

describe('Test of LinkedList methods', () => {
    it(`init & toString`, () =>{
        linkList.myLinkedList.init([1,2,3]);
        let actual = linkList.myLinkedList.toString();
        let expected = "1,2,3";

        assert.equal(actual, expected);
    })

    it(`push`, () => {
        let actual = linkList.myLinkedList.push(4);
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`getSize`, () => {
        let actual = linkList.myLinkedList.getSize();
        let expected = 4;

        assert.equal(actual, expected);
    })

    it(`pop`, () => {
        let actual = linkList.myLinkedList.pop();
        let expected = 4;

        assert.equal(actual.value, expected);
    })

    it(`slice`, () => {
        let actual = linkList.myLinkedList.slice(1);
        let expected = 2;

        assert.equal(actual[0].value, expected);
    })

    it(`shift`, () => {
        let actual = linkList.myLinkedList.shift();
        let expected = 1;

        assert.equal(actual.value, expected);
    })

    it(`unshift`, () => {
        let actual = linkList.myLinkedList.unshift(1);
        let expected = 3;

        assert.equal(actual, expected);
    })

    it(`splice`, () => {
        let actual = linkList.myLinkedList.splice(0,1,1);
        let expected = 1;

        assert.equal(actual[0], expected);
    })

    it(`sort`, () => {
        let actual = linkList.myLinkedList.sort((a,b) => a > b ? false : true);
        let expected = 3;

        assert.equal(actual[0].value, expected);
    })

    it('get', () => {
        let actual = linkList.myLinkedList.get(0);
        let expected = 3;

        assert.equal(actual, expected);
    })

    it('set', () => {
        linkList.myLinkedList.set(3, 0);
        let actual = linkList.myLinkedList.get(3);
        let expected = 0;

        assert.equal(actual, expected);
    })
})

describe('Test of tryLinkedList methods', () => {
    beforeEach(() => tryLinkList.myLinkedList.init([1,2,3]));
    afterEach(() => tryLinkList.myLinkedList._route = null);

    it('unshift', () => {
        let actual = tryLinkList.myLinkedList.unshift(4);
        let expected = 4;

        assert.equal(actual, expected);
    })

    it('getSize', () => {
        let actual = tryLinkList.myLinkedList.getSize();
        let expected = 3;

        assert.equal(actual, expected);
    })

    it('shift', () => {
        let actual = tryLinkList.myLinkedList.shift();
        let expected = 1;

        assert.equal(actual, expected);
    })

    it('push', () => {
        let actual = tryLinkList.myLinkedList.push(4);
        let expected = 4;

        assert.equal(actual, expected);
    })

    it('pop', () => {
        let actual = tryLinkList.myLinkedList.pop();
        let expected = 3;

        assert.equal(actual, expected);
    })

    it(`get`, () => {
        let actual = tryLinkList.myLinkedList.get(0).value;
        let expected = 1;

        assert.equal(actual, expected);
    })

    it(`slice`, () => {
        let newLinkedList = tryLinkList.myLinkedList.slice(0,2);
        let actual = newLinkedList.get(0).value;
        let expected = 1;

        assert.equal(actual, expected);
    })

    it(`splice`, () => {
        let actual = tryLinkList.myLinkedList.splice(0,1,4,5)._route.value;
        let expected = 1;

        assert.equal(actual, expected);
    })

    it(`sort`, () => {
        let actual = tryLinkList.myLinkedList.sort((a,b) => a > b ? false : true);
        let expected = 3;

        assert.equal(actual._route.value, expected);
    })

    it(`set`, () => {
        tryLinkList.myLinkedList.set(0,0);
        let actual = tryLinkList.myLinkedList.get(0);
        let expected = 0;
        assert.equal(actual.value, expected);
    })

    it(`toString`, () => {
        let actual = tryLinkList.myLinkedList.toString();
        let expected = "1,2,3";
        assert.equal(actual, expected);
    })
})
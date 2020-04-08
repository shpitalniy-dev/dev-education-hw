mocha.setup('bdd');
let assert = chai.assert;

describe('sortMyArr', function(){
    var masObj = [{lastName: 'Zidan'}, {lastName: 'Williams'}, {lastName: 'Ricardo'}];
    //GIVEN
    var actual = copyArray(masObj);
    sortMyArr(actual);
    //WHEN
    var result = [{lastName: 'Ricardo'}, {lastName: 'Williams'}, {lastName: 'Zidan'}];
    //THEN
    it(`Sort array by last name [{lastName: 'Zidan'}, {lastName: 'Williams'}, {lastName: 'Ricardo'}]`, function(){
        assert.deepEqual(actual, result);
    })
})

describe('mapMyArr', function(){
    var masObj = [{firstName: 'Dima'}, {firstName: 'Bogdan'}, {firstName: 'Vlad'}];
    //GIVEN
    var actual = mapMyArr(masObj);
    // WHEN
    var result = [{firstName: 'DIMA'}, {firstName: 'BOGDAN'}, {firstName: 'VLAD'}];
    // THEN
    it('First name to upper case', function(){
        assert.deepEqual(actual, result);
    })
})

describe('filterMyArr', function(){
    var masObj = [{age: 30}, {age: 25}, {age: 15}];
    //GIVEN
    var actual = filterMyArr(masObj);
    //WHEN
    var result = [{age: 30}];
    //THEN
    it('Give objects with age more then 25', function(){
        assert.deepEqual(actual, result);
    })
})

describe('reduceMyArr', function(){
    var masObj = [{lastName: 'Zidan'}, {lastName: 'Williams'}, {lastName: 'Ricardo'}];
    //GIVEN
    var actual = reduceMyArr(masObj);
    //WHEN
    var result = 20;
    //THEN
    it('Count of elements in each last names', function(){
        assert.equal(actual, result);
    })
})

describe('forEachMyArr', function(){
    var masObj = [{firstName: 'Dima'}, {firstName: 'Bogdan'}, {firstName: 'Vlad'}];
    //GIVEN
    var actual = forEachMyArr(masObj);
    //WHEN
    var result = "<dt>Dima</dt><dt>Bogdan</dt><dt>Vlad</dt>";
    //THEN
    it('Convert massive in HTML element', function(){
        assert.equal(actual, result);
    });
})

mocha.run();
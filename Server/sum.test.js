//test cases for our unit fun sum
const sum = require('./test/sum')

//jest test cases
//test function to test
test('fun should return 3',()=>{
    expect(sum(1,2)).toBe(3);
    //toBe()->exactly equal
    //expect(0)
})
//run 'npm test' under server folder
test('Object in array',()=>{
    const data = {one:1}
    data['two']=6;
    expect(data).toEqual({one:1,two:6});
})
//roBeNull -> if the received value is NULL
test('Value id Null',()=>{
    const n=null;
    expect(n).toBeNull();
})
//toBeDefined ->if a value is defined or not
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
//toBeTruthy -> received value should be truth
test('Value is Truth',()=>{
    const bool = true
    expect(bool).toBeTruthy();
})
//toBeFalsy -> received value should be false
test('Value is False',()=>{
    const bool = false
    expect(bool).toBeFalsy();
})
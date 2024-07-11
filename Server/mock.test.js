//mock.test.js

const {getData, getRaw} = require('./test/utils');
const {processData,processRaw} = require('./test/processData');
jest.mock('./test/utils',()=>(
    {
        getData:jest.fn(),
        getRaw:jest.fn()
    }
));
test('Mocked the Process Data',()=>{
    //mock the return value of getdata
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data');
});
test('Mocked Raw Data',()=>{
    //mock the return value of getdata
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
});
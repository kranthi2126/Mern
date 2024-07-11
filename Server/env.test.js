let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['raju','ram'];
})
beforeEach(()=>{
    console.log('Before each Setup is called');
})
afterEach(()=>{
    console.log('After each setup is called');
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data Set Contains',()=>{
    expect(dataSets).toContain('ram');
})
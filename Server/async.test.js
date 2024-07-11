const {fetchData,MyData}=require('./test/async');
test('callback data',done=>{
    function callback(data){
        try{
            expect(data).toBe('admin');
            done();
        }catch(err){
            done(err);
        }
    }
    fetchData(callback);
})
test('callback MyData',done=>{
    function callback(data){
        try{
            expect(data.id).toBe(10001);
            done();
        }catch(err){
            done(err);
        }
    }
    MyData(callback);
})
test('Mocking callback function',done=>{
    const MockFunction=jest.fn(data=>{
        expect(data).toBe('admin');
        //console.log('Mock Function');
        done();
    })
    fetchData(MockFunction);
})
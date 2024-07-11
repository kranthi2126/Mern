const mongoose = require('mongoose')

describe('MongoDB connected',()=>{
    beforeAll(async ()=>{
        const url='mongodb+srv://pavithrareddy6888:Pj7zY7X7etGb6Iz5@cluster0.sjeruot.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        await mongoose,connect(url);
    })

    //call test case inside describe and below before all
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
    })
});
    
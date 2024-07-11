function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },1000)
}
//returns admin after 4 seconds
module.exports={fetchData,MyData};
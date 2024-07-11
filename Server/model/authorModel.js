const mongoose=require('mongoose')
const AuthorSchema=mongoose.Schema(
    {
        _id:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        age:{
            type:String,
            required:true,
        },
        totalBooks:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            requires:true,
        },
        
    }
)
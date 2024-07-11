const express=require('express')
const router=express.Router()
const Books = require('../model/bookModel')
const Author=require('../model/authorModel')
router.post('/',async(req,res)=>{
    try{
    const{_id,name,publisher,description,authorId}=req.body;
    const author = new Author({_id,name,publisher,description,authorId});
    author.save();
    res.status(201).send({message:'Author ${name} saved'});
    }catch(err){
        res.status(500).send(err.message)
    }
})

module.exports=router;
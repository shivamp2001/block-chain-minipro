const express=require('express')
const app=express()
const mongoose=require('mongoose')
const route=require('./router')

app.use(express.json())
mongoose.connect("mongodb+srv://shivamp2001:shivamp2001@mycluster.au9iv5p.mongodb.net/shivam2001-db",
{
    useNewUrlParser: true
    
})
.then(()=> console.log("Mongoose is connected"))
       .catch(err => console.log(err));

app.use("/",route)

app.listen(3000,()=>{
console.log("running port on 3000")
})
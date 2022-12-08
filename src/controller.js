
const chainModel=require('./model')
const axios=require('axios')
exports.getcoindetails=async(req,res)=>{
const authorisation=req.headers
    let options={
        method:"get",
        url:'https://api.coincap.io/v2/assets',
        headers: {
            Authorization: authorisation
          }
    
    }
    let result = await axios(options);
    const data=result.data.data.sort((a,b)=>{a.changePercent24Hr-b.changePercent24Hr }) 
   
    const createData=await chainModel.create(data)
    
res.send({status:true,data:createData})
}
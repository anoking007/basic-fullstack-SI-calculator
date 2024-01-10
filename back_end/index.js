const express=require("express");
//const cors=require("cors")

const app=express();
//app.use(cors())

app.get("/calculate",(req,res)=>{
    const principal=req.query.principal;
    const rate=req.query.rate;
    const time=req.query.time;
    const result=(parseInt(principal)*parseInt(rate)*parseInt(time))/100;

    res.send(result.toString());

})



app.listen(3000);
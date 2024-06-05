const express=require('express');
const app=express();
const PORT=3000;
app.use(express.json());
app.get('/',(req,res)=>
{
    res.send('welcome');
});
app.get('/query',(req,res)=>
{
    const queryparams=req.query;
    console.log(`query params are ${JSON.stringify(queryparams)}`);
});
app.listen(PORT,()=>
{
    console.log(`server running at ${PORT}`);
});
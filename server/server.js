const express=require('express');
const app=express();
require('../database/db')
const port=4000;

app.listen(port,()=>{
console.log('server is runnig on port',port);
});
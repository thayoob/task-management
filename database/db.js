const mongoose =require('mongoose');
const mongoURI='mongodb://127.0.0.1:27017/task-mangement-system';

const options={
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

mongoose
    .connect(mongoURI,options)
    .then(()=>{
        console.log("connected to MongoDB");
    })
    .catch((error)=>{
        console.log("Error connecting to MongoDB",error);
    })
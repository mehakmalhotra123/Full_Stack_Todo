import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
app.use(cors());
dotenv.config();

const port = process.env.PORT ;

app.get('/', (req, res)=>{
    res.send("Server is ready");
})
app.get('/jokes',(req,res)=>{
    const jokes =[
        {
            id:1,
            title :"A joke",
            content : 'this is a joke'
        },
          {
            id:2,
            title :"A joke",
            content : 'this is a joke'
        },
          {
            id:3,
            title :"A joke",
            content : 'this is a joke'
        },
          {
            id:4,
            title :"A joke",
            content : 'this is a joke'
        },
         {
            id:4,
            title :"A joke",
            content : 'this is a joke'
        },
    ]
    res.send(jokes)
})
app.listen(port,() =>{
    console.log(`server at ${port}`)
})


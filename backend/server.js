import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import router from './routes/auth.js';
import list from './routes/list.js'


dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());



app.get('/', (req, res)=>{
    res.send("Server is ready");
})

// register api
app.use("/api/v1", router)
// list api
app.use("/api/v1" , list)

const port = process.env.PORT ;
app.listen(port,() =>{
    console.log(`server at ${port}`)
})




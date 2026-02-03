import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { User } from "./models/user.models.js";

app.use(express.json());

app.use(cors());
dotenv.config();
connectDB();

const port = process.env.PORT ;

app.get('/', (req, res)=>{
    res.send("Server is ready");
})
app.get('/jokes',(req,res)=>{
    
})
app.listen(port,() =>{
    console.log(`server at ${port}`)
})

app.post("/api/users", async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const user = await User.create({
      userName,
      email,
      password
    });

    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      isActive: user.isActive
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



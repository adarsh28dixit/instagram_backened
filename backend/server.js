import express from "express";
import mongoose from 'mongoose'
import profileRouter from "./routers/profileRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use(express.json())

mongoose.connect('mongodb://localhost/Practice', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/api', profileRouter)
app.use('/api', userRouter)

app.use('/', (req,res) =>{
    res.send('hello, server is ready')
})

app.listen(5000, () => {
    console.log('http://localhost:5000')
})
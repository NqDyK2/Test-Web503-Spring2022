import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';


import productRoute from "../routes/products"
import userRoute from "../routes/auth"

const app = express();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

app.use("/api",productRoute)
app.use("/api",userRoute)
// connnect database
mongoose.connect('mongodb://127.0.0.1:27017/baithi2')
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));
    
// connection
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})
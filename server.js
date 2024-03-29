import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js"
import reviewRoute from "./routes/review.route.js";
import orderRoute from "./routes/order.route.js";
import messageRoute from "./routes/message.route.js";
import conversationRoute from "./routes/conversation.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";



const app = express();
dotenv.config();


// const conn = async() =>{
//     try {
//         await mongoose.connect('mongodb+srv://Rishabh_Choudhary:rishabh@172001@fiverrbackend.swbq79s.mongodb.net/fiverrBackend?retryWrites=true&w=majority');
//         console.log("connected");
//         // MONGODB_URL = mongodb+srv://rishabhchoudhary172001:lbVFvR8zkHfnHFAw@rishabhapiproduct.zmszyv9.mongodb.net/RishabhAPIproduct?retryWrites=true&w=majority
//     } catch (error) {
//      handleError(error);   
//     }
    
// }
const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
    } catch (error) {
        console.log(error);
    }

}


app.use(express.json());
app.use(cookieParser());



app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages",messageRoute);
app.use("/api/reviews",reviewRoute);

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "something went wrong!"
  
  return res.status(errorStatus).send(errorMessage);
})




app.listen(8000,(req,res)=>{
    connect();
    console.log("backend server is running! at port 8000");
})
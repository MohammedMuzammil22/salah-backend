import cookieParser from "cookie-parser";
import express from "express"
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleWare from "./middlewares/error.middleware.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)
app.use(errorMiddleWare)

app.listen(PORT, async ()=>{
    console.log(`listing in port on ${PORT}`);
    await connectToDatabase();
})

export default app;
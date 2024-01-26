import express from "express" ;
import morgan from "morgan" ;
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.routes.js";
import resumeRoutes from "./Routes/resume.routes.js";

const app = express() ;

app.use(morgan('dev')) ;
app.use(express.json()) ;
app.use(cookieParser()) ;
app.use("/api" , authRoutes)
app.use("/api" , resumeRoutes)

export default app ;
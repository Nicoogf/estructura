import express from "express" ;
import morgan from "morgan" ;
import cookieParser from "cookie-parser"
import authRoutes from "./Routes/auth.routes.js";
import resumeRoutes from "./Routes/resume.routes.js";
import bodyParser  from "body-parser"

const app = express() ;

app.use(morgan('dev')) ;
app.use(bodyParser.json());
app.use(express.json()) ;
app.use(cookieParser()) ;
app.use("/api" , authRoutes)
app.use("/api" , resumeRoutes)

export default app ;
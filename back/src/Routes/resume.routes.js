import { Router } from "express" ;
import { authRequire } from "../Middlewares/validateToken.js" ;

const router = Router() ;

router.get("/resume" , authRequire, (req , res) => {
    res.send("Resume")
})

export default router ;
import { Router } from "express" ;
import { register, loguin, logout, profile } from "../Controllers/auth.controller.js";
import { authRequire } from "../Middlewares/validateToken.js";

const router = Router()

router.post('/register' , register ) ;
router.post('/loguin', loguin ) ;
router.post('/logout', logout ) ;
router.get('/profile', authRequire , profile ) ;


export default router ;
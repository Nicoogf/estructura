import { Router } from "express" ;
import { register, loguin, logout } from "../Controllers/auth.controller.js";

const router = Router()

router.post('/register' , register ) ;
router.post('/loguin', loguin ) ;
router.post('/logout', logout ) ;


export default router ;
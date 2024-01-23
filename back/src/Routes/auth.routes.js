import {Router} from "express" ;
import { register, loguin } from "../Controllers/auth.controller.js";

const router = Router()

router.post('/register' , register ) ;
router.post('/loguin', loguin ) ;


export default router ;
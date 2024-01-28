import { Router } from "express" ;
import { authRequire } from "../Middlewares/validateToken.js" ;
import { getCuentas , getCuenta ,agregarCuenta ,deleteCuenta , updateCuenta} from "../Controllers/cuenta.controller.js"; 
const router = Router() ;


//Resumen Global
router.get("/resume" , authRequire , getCuentas )

//Resumen por Banco
router.get("/resume/:id" , authRequire , getCuenta )

//Agregar cuenta
router.post("/resume" , authRequire , agregarCuenta )

//Desvincular Cuenta
router.delete("/resume/:id" , authRequire, deleteCuenta )


//editar datos de  Cuenta
router.delete("/resume/:id" , authRequire, updateCuenta )

//editar datos de  Cuenta
router.delete("/resume/:id//" , authRequire )


export default router ;
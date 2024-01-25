import User from "../Models/user.mode.js" ;
import bycrpt from "bcryptjs" ;
import { createAccesToken } from "../Libs/jwt.js";

export const register = async ( req,res ) => {
    const { 
            nombre , 
            apellido , 
            dni , 
            correo , 
            pass,
            telefono
        } = req.body
    
    try {
        //const passwordHash
        const contraHash = await bycrpt.hash(pass , 10)
        
        //const newUser   
        const usuarioNuevo = new User({
            nombre,
            apellido,
            dni,
            correo,
            pass : contraHash,
            telefono
        })
       //const userSaved 
       const usuarioGuardado =  await usuarioNuevo.save() ;
       const token = await createAccesToken ({ id: usuarioGuardado._id})      
       
       res.cookie( 'token' , token )     
       res.json
            ({
                id: usuarioGuardado._id,
                nombre : usuarioGuardado.nombre,
                apellido: usuarioGuardado.apellido,
                dni: usuarioGuardado.dni,
                correo: usuarioGuardado.correo,
                telefono: usuarioGuardado.telefono,
                dineroActual: usuarioGuardado.dineroActual,
                cuentasBancarias: usuarioGuardado.cuentasBancarias,
                movimientosBancarios: usuarioGuardado.movimientosBancarios,
                rol: usuarioGuardado.rol ,
                createAt: usuarioGuardado.createdAt ,
                updateAt: usuarioGuardado.updatedAt
            })      
    } catch (error) {
        console.log(error)
    }
 }    

export const loguin = ( req,res) => {
    res.send("Loguin")
}
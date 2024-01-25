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
       res.status(500).json({ message : error.message })
    }
 }    

export const loguin = async ( req,res) => {
    const { correo , pass } = req.body ;

try {
    //const userFound
   const usuarioEncontrado = await User.findOne({correo})
   if( !usuarioEncontrado ) return res.status(400).json({message: "Usuario no encontrado"})

    //const isMatch
    const coincideContra = await bycrpt.compare(pass , usuarioEncontrado.pass)
    if(!coincideContra) return res.status(400).json({ message : "Credenciales Incorrectas"})
    
   const token = await createAccesToken ({ id: usuarioEncontrado._id})      
   
   res.cookie( 'token' , token )     
   res.json
        ({
            id: usuarioEncontrado._id,
            nombre : usuarioEncontrado.nombre,
            apellido: usuarioEncontrado.apellido,
            dni: usuarioEncontrado.dni,
            correo: usuarioEncontrado.correo,
            telefono: usuarioEncontrado.telefono,
            dineroActual: usuarioEncontrado.dineroActual,
            cuentasBancarias: usuarioEncontrado.cuentasBancarias,
            movimientosBancarios: usuarioEncontrado.movimientosBancarios,
            rol: usuarioEncontrado.rol ,
            createAt: usuarioEncontrado.createdAt ,
            updateAt: usuarioEncontrado.updatedAt
        })      
} catch (error) {
   res.status(500).json({ message : error.message })
}
}    

export const logout = ( req, res ) => {
    res.cookie("token" , "" , {
        expires: new Date(0),
    })
    return res.sendStatus(200)
}
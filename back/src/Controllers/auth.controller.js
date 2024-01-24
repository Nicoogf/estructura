import User from "../Models/user.mode.js" ;
import bycrpt from "bcryptjs" ;
import jwt from "jsonwebtoken" ;

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
       const UsuarioGuardado =  await usuarioNuevo.save() ;

      
       
       res.cookie( 'token' , token )
       res.json({ 
           message : "Usuario creado Satisfactoriamente"
        })
      /*  res.json
            ({
                id: UsuarioGuardado._id,
                nombre : UsuarioGuardado.nombre,
                apellido: UsuarioGuardado.apellido,
                dni: UsuarioGuardado.dni,
                correo: UsuarioGuardado.correo,
                telefono: UsuarioGuardado.telefono,
                dineroActual: UsuarioGuardado.dineroActual,
                cuentasBancarias: UsuarioGuardado.cuentasBancarias,
                movimientosBancarios: UsuarioGuardado.movimientosBancarios,
                rol: UsuarioGuardado.rol ,
                createAt: UsuarioGuardado.createdAt ,
                updateAt: UsuarioGuardado.updatedAt
            })
      */
    } catch (error) {
        console.log(error)
    }
 }    

export const loguin = ( req,res) => {
    res.send("Loguin")
}
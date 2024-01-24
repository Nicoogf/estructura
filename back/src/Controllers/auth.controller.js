import User from "../Models/user.mode.js" ;

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
        //const newUser   
        const usuarioNuevo = new User({
            nombre,
            apellido,
            dni,
            correo,
            pass,
            telefono
        })
       //const userSaved 
       const UsuarioGuardado =  await usuarioNuevo.save() ;
        res.json( UsuarioGuardado )
        
    } catch (error) {
        console.log(error)
    }
 }    

export const loguin = ( req,res) => {
    res.send("Loguin")
}
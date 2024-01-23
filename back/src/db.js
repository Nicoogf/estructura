import mongoose from "mongoose" ;

export const connectDB = async () => {
    try {
       await mongoose.connect( "mongodb://localhost/digital-proyect")
       console.log("Conexion Exitosa a la base de Datos")
    } catch (error) {
       console.log(error)
    }
}
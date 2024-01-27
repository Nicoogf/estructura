import mongoose from "mongoose";

//const taskSchema
const cuentaBancaria = new mongoose.Schema({
    nombreBanco: {
        type: String,
        required: true,
        trim: true
      },
      tarjetas: {
        type: Object,
        default: "{}",
      },     
      dineroDisponible:{
        type: Number,
        default:0
      }
})
   

export default mongoose.model('CuentaBancaria' , cuentaBancaria ) ;
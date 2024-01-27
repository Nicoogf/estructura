import mongoose from "mongoose";

//const taskSchema
const cuentaBancaria = new mongoose.Schema({
    nombreBanco: {
        type: String,
        required: true,
        trim: true
      },
      dineroDisponible:{
        type: Number,
        default:0
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require : true
      }
})
   

export default mongoose.model('CuentaBancaria' , cuentaBancaria ) ;
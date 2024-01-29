import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true
    },
    apellido: {
      type: String,
      required: true,
      trim: true
    },
    dni: {
      type: Number,
      trim: true,

    },
    telefono: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
      minlength: 10,
      maxlength: 16
    },
    correo: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true
    },
    pass: {
      type: String,
      required: true,
      minlength: 8,     
    },
    dineroActual: {
      type: Number,
      default: 0
    },
    movimientosBancarios: {
      type:String
    }
    ,
    rol: {
      type: String,
      enum: ['administrador', 'usuario', 'empresa'],
      default:"usuario"    
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);

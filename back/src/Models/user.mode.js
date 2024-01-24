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
      required: true,
      trim: true,
      unique: true
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
      maxlength: 20
    },
    dineroActual: {
      type: Number,
      default: 0
    },
    cuentasBancarias: {
      type: Object,
      default: {},
      properties: {
        nombreBanco: {
          type: String,
          required: true
        },
        dineroEnCuenta: {
          type: Number,          
          default: 0
        }
      }
    },
    movimientosBancarios: [
      {
        fecha: {
          type: Date,
          default: Date.now
        },
        tipoTransaccion: {
          type: String,
          enum: ['ingreso', 'egreso'],
          required: true
        },
        monto: {
          type: Number,
          required: true
        },
        desc: {
          type: String,          
          trim: true,          
          default: "Sin Informacion"
        }
      }
    ],
    rol: {
      type: String,
      enum: ['administrador', 'usuario', 'empresa'],      
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);

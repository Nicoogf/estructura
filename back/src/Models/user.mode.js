import mongoose from "mongoose" ;

const userSchema = mongoose.Schema({
    nombre: {
        type : String,
        require: true,
        trim: true
    },
    apellido : {
        type : String,
        require: true,
        trim: true
    },
    dni : {
        type : Number,
        require: true,
        trim: true,
        unique: true
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
    dineroActual : {
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
                required: true,
                default: 0
            },
           
        }
    },
    rol: {
        type: String,
        enum: ['administrador', 'usuario' , 'empesa'],
        required: true
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
                required: true,              
            },
            desc:{
                type: String,
                require: true,
                trim: true
            }
        }
    ]
})

export default mongoose.model('User' , userSchema )
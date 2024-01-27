import Cuenta from "../Models/cuenta.model.js" ;

//const getTasks
export const getCuentas= async ( req, res) => {
// const tasks
const Cuentas = await Cuenta.find()
    res.json(Cuentas)
}

//const createTask
export const agregarCuenta = async ( req, res) => {
  const { nombreBanco , dineroDisponible , } = req.body
  //const newTask
  const nuevaCuenta = new Cuenta({
    nombreBanco,
    dineroDisponible,
    user  : req.user.id 
  })
  //const saveTask
  const cuentaGuardada = await nuevaCuenta.save()
  res.json(cuentaGuardada)
}

//
export const getCuenta = async ( req, res) => {
 const cuenta = await Cuenta.findById(req.params.id)
 if(!cuenta) return res.status(404).json({message : "Tarea no encontrada"})
 res.json(cuenta)
}

export const updateCuenta = async ( req, res) => {
  const cuenta = await Cuenta.findById(req.params.id)
  if(!cuenta) return res.status(404),json({message : "Tarea no encontrada"})
  res.json(cuenta)
}

export const deleteCuenta = async ( req, res) => {
  const cuenta = await Cuenta.findByIdAndUpdate(req.params.id , req.body , { new : true } ) 
  if(!cuenta) return res.status(404).json({message : "Tarea no encontrada"})
  res.json(cuenta)
}

import React from 'react'

const RegisterForm = () => {
  return (
    <div className="w-full bg-red-200 text-black h-screen">

    <form className="w-[95%] mx-auto">

     <div className="flex flex-col">
       <label htmlFor="name"> nombre </label>
       <input placeholder="nombre" id="name" className="py-2 rounded-md"/>
     </div>

     <div className="flex flex-col">
       <label htmlFor="lastname"> apellido </label>
       <input placeholder="apellido" id="lastname" className="py-2 rounded-md"/>
     </div>

     <div className="flex flex-col">
       <label htmlFor="dni"> documento </label>
       <input placeholder="dni" id="dni"className="py-2 rounded-md"/>
     </div>

     <div className="flex flex-col">
       <label htmlFor="email"> email </label>
       <input placeholder="email" id="email" className="py-2 rounded-md"/>
     </div> 

     <div className="flex flex-col">
       <label htmlFor="pass"> contraseña </label>
       <input placeholder="usuario" id="pass" className="py-2 rounded-md"/>
     </div>

     <div className="flex flex-col">
       <label htmlFor="phone"> telefono </label>
       <input placeholder="phone" id="phone" className="py-2 rounded-md"/>
     </div>

     <div className="flex flex-col">
       <label htmlFor="retrypass"> repetir contraseña </label>
       <input placeholder="retrypass" id="retrypass" className="py-2 rounded-md"/>
     </div>

     <button className="bg-lime px-6 py-3 mx-auto block mt-2"> Submit </button>

    </form>
   </div>
  )
}

export default RegisterForm ;
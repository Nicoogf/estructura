import React from 'react'

const LoguinForm = () => {
  return (
    <div className="w-full bg-red-200 text-black h-screen">

    <form className="w-[95%] mx-auto">

     <div className="flex flex-col">
       <label htmlFor="username"> usuario </label>
       <input placeholder="usuario" id="username" className="py-2 rounded-md"/>
     </div>
    
     <div className="flex flex-col">
       <label htmlFor="pass"> contraseña </label>
       <input placeholder="usuario" id="pass" className="py-2 rounded-md"/>
     </div>

     <button className="bg-lime px-6 py-3 mx-auto block mt-2"> Submit </button>

    </form>
   </div>
  )
}

export default LoguinForm
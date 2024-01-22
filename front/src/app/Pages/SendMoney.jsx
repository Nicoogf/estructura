import React from 'react'

const SendMoney = () => {
  return (
    <div className="w-[95%] mx-auto bg-red-200 text-black h-screen text-center">       

    <form action="destinatario" className='flex flex-col'>
      <label htmlFor="">Ingresar Destinatario</label>
      <input className='py-2 w-[80%] mx-auto rounded-md' id="destinatario"/>

      <label htmlFor="monto"> Ingresar Monto</label>
      <input className='py-2 w-[80%] mx-auto rounded-md' id="monto"/>

      <button className='bg-lime py-2 px-4 bloc w-[30%] mx-auto mt-4'> Enviar </button>

    </form>
    </div>
  )
}

export default SendMoney
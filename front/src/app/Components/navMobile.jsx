import Link from 'next/link'
import React from 'react'

const NavMobile = () => {
  return (
    <nav className='fixed bottom-0 bg-blue-dark w-full text-lime'>
        <div className='flex flex-row justify-between  w-[90%] mx-auto items-center'>

          <Link href="/">  
            <h6 className='text-sm'>
                Inicio
            </h6> 
         </Link>

         <Link href="/">  
            <h6 className='text-sm rounded-rt-lg'>
                movimientos
            </h6> 
         </Link>

         <Link href="/" className=''>  
            <h6 className='relative rounded-full bg-lime h-14 w-14 text-blue-dark text-center flex justify-center items-center bottom-2'>
                DMH
            </h6> 
         </Link>

         <Link href="/">  
            <h6 className='text-sm'>
                pagos
            </h6> 
         </Link>

         <Link href="/">  
            <h6 className='text-sm'>
                perfil
            </h6> 
         </Link>

        </div>
      
    </nav>
  )
}

export default NavMobile
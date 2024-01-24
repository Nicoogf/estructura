import Link from 'next/link'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";


const NavMobile = () => {
  return (
    <nav className='fixed bottom-0 w-full text-lime'>
        <div className='relative flex flex-row w-full mx-auto items-centerbg-blue-dark'>

        <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center'>  
             <IoHomeOutline className='text-2xl'/>
         </Link>

         <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center rounded-tr-full '>               
                <BiTransferAlt className='text-2xl'/>        
         </Link>

         <Link href="/" className="absolute left-1/2 bottom-2 transform -translate-x-1/2 -translate-y-1/2 ">  
            <h6 className='rounded-full gradiente-lime h-12 w-12 text-center flex justify-center items-center mx-1 text-white'>
                DMH
            </h6> 
         </Link>

         <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center rounded-tl-full '>           
                <CiMoneyBill className='text-2xl'/>         
         </Link>

         <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center'>                
                <FaRegUser className='text-2xl'/>         
         </Link>

        </div>
      
    </nav>
  )
}

export default NavMobile
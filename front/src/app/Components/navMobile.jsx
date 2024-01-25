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

         <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center rounded-tr-3xl '>               
                <BiTransferAlt className='text-2xl'/>        
         </Link>

         

         <Link href="/" className='h-[50px] flex-1 bg-blue-dark flex items-center justify-center rounded-tl-3xl '>           
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
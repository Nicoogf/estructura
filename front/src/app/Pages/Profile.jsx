import Link from 'next/link'
import React from 'react'

const Profile = () => {
  return (
    <div className="w-[95%] mx-auto bg-red-200 text-black h-screen text-center">

        

    <h2> Usuario </h2>
    <p> Nicoogf_ </p>

    <h2> Email </h2>
    <p> Nicoogf@gmail.com </p>

    <Link href={"/"}> 
     <p> Ver ultimos movimientos </p> 
    </Link>
    </div>
  )
}

export default Profile
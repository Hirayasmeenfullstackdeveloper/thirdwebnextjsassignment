import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex bg-first h-20 text-white'>
       
        <h1 className=' text-4xl font-bold p-5'>Delicious Snacks</h1>
        
        <nav className="ml-auto">
            <ul className='flex space-x-6 text-right p-5 	'>
                <li> <Link href="/">Home</Link></li>
                <li> <Link href="/service">Service</Link></li>
                <li> <Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
        </div>

    
  )
}

export default Header

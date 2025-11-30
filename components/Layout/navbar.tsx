import Link from 'next/link'
import React from 'react'
import Links from '../Links/page'
import DropMenu from '../DropMenu/page'

const Navbar = () => {
  return (
    <div className='border-b-1 py-2 flex justify-around px-68 items-center'>
        <h2 className='text-3xl text-amber-400 font-bold bg-amber-800 rounded-xl px-3 py-2'>GIFD LOGO</h2>
        <div className='flex gap-5'>
            <Links href="/" size='text-xl' title="Home" />
            <Links href="/about" title="About" size="text-xl" />
            <h3 className='text-xl '>School</h3>
            <h3 className='text-xl'>Programs</h3>
            <h3 className='text-xl'>Resources</h3>
            <Links href="/Contact" size='text-xl' title='Contact' />
            <Links href="/Gallary" size='text-xl' title='Gallery' />
            <Links href="/Login" size='text-xl' title='Login' />
        </div>
        <DropMenu />  

        <div className='border rounded-sm p-3 font-bold shadow-[3px_3px_10px_rgba(0,0,0,0.70)] bg-amber-300'>Registration</div>
    </div>
  )
}

export default Navbar
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import {styles} from '../styles/styles';
import Link from 'next/link';
import {navLinks} from '../constants';
import {logo,menu,close} from '../assets';
import Image from 'next/image';
const Navbar = () => {
  const [active,setActive] = useState<string>('');
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href={'/'}  className='flex items-center gap-2' onClick={()=>{setActive(''); window.scrollTo(0,0)}}>
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer'>Adrian <span className='sm:block hidden'>| JavaScript Mastery</span></p>
        </Link>
        <p className='text-red-500'>ass</p>
      </div>
    </nav>
  )
}

export default Navbar
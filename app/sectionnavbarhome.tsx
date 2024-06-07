import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SectionNavbarHome() {
  return (
    <nav className='flex p-3 z-20 static items-center w-full  top-0 justify-between'>
      <div className='flex gap-16 items-center'>
        <span className='text-xl font-medium'><Link href={'/'}>Glary</Link></span>
        <form className='2-98'><input type="text" name="" id="" className='bg-neutral-100 text-black px-5 py-1.5 w-80  outline-none text-sm rounded-3xl ' placeholder='Search your image ...' /></form>

      </div>
      <div>
        <ul className='inline-flex items-center space-x-8'>
          <li><Link href={'/'}><button>Home</button></Link></li>
          <li><Link href={'/auth/image/post'}><button className='text-neutral-500'>Post</button></Link></li>
          <li className='relative group'> <button type="button" className="inline-flex text-neutral-500 w-full items-center justify-center gap-x-1.5 " id="menu-button" aria-expanded="true" aria-haspopup="true">
            Explore
            <svg className="-mr-1 h-5 w-5 group-hover:rotate-90" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
            <div className="absolute duration-200 right-0 z-10 mt-2 max-h-0 group-hover:max-h-52 group-hover:border group-hover:shadow-sm overflow-hidden w-44 origin-top-right rounded-md bg-white   " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
              <div className="py-1" role="none">
                <Link className='text-neutral-500 hover:text-black block px-4 py-2 text-sm' href={'#'}>Account settings</Link>
                <Link className='text-neutral-500 hover:text-black block px-4 py-2 text-sm' href={'#'}>Support</Link>
                <Link className='text-neutral-500 hover:text-black block px-4 py-2 text-sm' href={'#'}>License</Link>

              </div>
            </div>
          </li>
          <li><button ><i className="fa-solid fa-bell"></i></button></li>
          <li><Link className='flex items-center' href={'/auth/accounts/profile'}><button className='w-7 h-7 relative overflow-hidden rounded-full'><Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"  ></Image></button></Link></li>
        </ul>
      </div>
    </nav>
  )
}

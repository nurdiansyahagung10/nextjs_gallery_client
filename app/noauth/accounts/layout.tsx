import MiddlewareNo from '@/components/middlewareno'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const montserrat = Montserrat({subsets:['latin'], weight:['400']})

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <MiddlewareNo addclassname="grid h-screen grid-cols-2 gap-3">
      <div className='p-5 flex gap-3 flex-col'>
        <nav>
          <span className={'text-4xl ' + montserrat.className}>G</span>
        </nav>
        <div className='flex items-center grow justify-center'>
          {children}
        </div>
      </div>
      <div className='p-5'>
        <div className='relative overflow-hidden  rounded-2xl w-full h-full'>
          <Image src={"https://i.pinimg.com/564x/7d/50/01/7d500191d17179140225ccce3c3cdba8.jpg"} layout='fill' objectFit='cover' alt='gambar login'></Image>
        </div>

      </div>
    </MiddlewareNo>
  )
}

import SpinnerLoad from '@/components/spinnerload'
import React from 'react'

export default function Loading() {
  return (
    <div className='fixed cursor-wait bg-white z-20 top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center'>
      <SpinnerLoad />
    </div>
)
}

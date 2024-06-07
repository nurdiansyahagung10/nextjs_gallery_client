import Image from 'next/image'
import React from 'react'

interface Props{
    url:string
}

export default function Sectionpostimage({url}: Props) {
  return (
    <>
    <Image src={url} className="w-full h-auto relative  rounded-xl" alt="" width={0} height={0} sizes="100vw" objectFit="conten"></Image>
    </>
)
}

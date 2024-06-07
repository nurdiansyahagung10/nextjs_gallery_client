import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props{
    data:any
}

export default function Sectiongrid({data}:Props) {

    const apilink = 'http://localhost:8000';

    return (
                <div className="inline-block relative overflow-hidden group rounded-2xl box-border w-full " style={{ margin: '0 0 0.7em' }}>
                    <div className="absolute z-10  h-full bg-gradient-to-b from-[rgba(0,0,0,0.05)] via-transparent to-transparent   top-0 bottom-0 left-0 hidden group-hover:flex right-0 justify-between flex-col">
                        <div className="p-2.5 flex justify-end ">
                            <div className="space-x-3">
                                <Link href={'/'} className="mx-auto">
                                    <button className="w-6 h-6 rounded-full  text-white border-none"><i className="fa-solid fa-bookmark"></i></button>
                                </Link>
                                <Link href={'/'} className="mx-auto">
                                    <button className="w-6 h-6 rounded-full  text-white border-none"><i className="fa-solid fa-download"></i></button>
                                </Link>

                            </div>
                        </div>
                        <Link href={'/'} className="flex-grow"></Link>
                        <div>
                            <div className="bg-black flex gap-3 items-center bg-opacity-20 backdrop-blur-sm p-2.5 text-white">
                                <div className="flex items-center">
                                    <button className="rounded-full h-7 w-7 overflow-hidden relative"><Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"  ></Image></button>
                                </div>
                                <div>
                                    <span className="text-sm whitespace-nowrap block overflow-ellipsis overflow-hidden w-32">{data.judulfoto}</span>
                                    <p className="text-xs">@{data.user.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image src={apilink + '/storage/images/' + data.lokasifile} className="w-full h-auto " style={{ position: 'relative' }} alt="" width={0} height={0} sizes="100vw" objectFit="conten"></Image>
                </div>

    )
}

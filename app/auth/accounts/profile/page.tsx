"use client"
import Loading from '@/app/loading'
import SectionNavbarHome from '@/app/sectionnavbarhome'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sectiongridprofile from './sectiongridprofile'

export default function page() {
    interface Props {
        username: string
        namalengkap: string
        foto: any
    }
    const [response, setresponse] = useState<Props | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')?.slice(1, -1)
        const id = localStorage.getItem('id')
        if (token && id) {
            axios.get(`http://127.0.0.1:8000/api/accounts/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(Response => {
                setresponse(Response.data[0])
            })
        }
    }, [])

    return (
        <div className=' xl:px-20 2xl:px-20'>
            {!response && <Loading />}

            <div className='flex  py-5 gap-10'>
                <div>
                    <button className='w-40 h-40 relative rounded-full overflow-hidden'>
                        <Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"  ></Image>
                    </button>
                </div>
                <div className='flex gap-4 flex-col'>
                    <div className='gap-2 flex'>
                        <span className='text-xl mr-5 font-medium'>{response?.username}</span>
                        <Link href={'/auth/accounts/profile/edit'}>
                            <button className='bg-black text-white rounded-xl px-3 py-1'>Edit Profile</button>
                        </Link>
                        <button className='bg-black text-white rounded-xl px-3 py-1'>Settings</button>
                    </div>
                    <div className='flex gap-9'>
                        <span>10 Post</span>
                        <span>100 Likes</span>
                        <span>100 Saving</span>
                    </div>
                    <div className='text-sm'>
                        <span className='font-medium'>{response?.namalengkap}</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolor architecto quibusdam, labore tempora adipisci nemo, quod dignissimos earum, aspernatur eligendi maiores. Commodi itaque ad quod iusto suscipit nesciunt nemo!</p>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />
            <div className='flex justify-center'>
                <ul className='inline-flex gap-12'>
                    <li className='border-t-2 py-3 border-t-black'><Link href={'/'}><i className="fa-solid fa-image"></i> Post</Link></li>
                    <li className='border-t-2 py-3 border-t-transparent'><Link href={'/'}><i className="fa-solid fa-border-all"></i> Album</Link></li>
                    <li className='border-t-2 py-3 border-t-transparent'><Link href={'/'}><i className="fa-solid fa-bookmark"></i> Saving</Link></li>
                </ul>
            </div>
            <div className='grid gap-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6'>
                {response?.foto.map((data: any, index: number) => (
                    <Sectiongridprofile key={index} imagedata={data} />
                ))}
            </div>
        </div>
    )
}

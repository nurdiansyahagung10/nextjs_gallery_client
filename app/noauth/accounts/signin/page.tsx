"use client"
import Loading from '@/app/loading'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function page() {

    const route = useRouter()



    interface Properror {
        message?: string
    }

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState<Properror>({});
    const [load, setload] = useState(false)


    const submit = async (e: any) => {
        setload(true)
        e.preventDefault()
        await axios.post(`http://localhost:8000/api/auth/signin`, { username, password }).then(prevrespon => {
            localStorage.setItem('token', JSON.stringify(prevrespon.data.token));
            localStorage.setItem('id', JSON.stringify(prevrespon.data.userid))
            route.push('/')
        }).catch((error) => {
            seterror(error.response && error.response.data ? error.response.data : error);
            setload(false)
        })

    }



    return (
        <>
            {load && <Loading />}

            <form onSubmit={submit} className={`w-96 flex flex-col gap-4 ${load && 'hidden'}`} >
                <div className=''>
                    <p className='text-3xl font-medium'>Welcome Back</p>
                    <p className='text-neutral-400'>Hi, Glary Want give you the best experience</p>

                </div>
                <div className='space-y-1'>
                    <label htmlFor="">username <span className='text-red-400'>*</span></label>
                    <div>
                        <input type="text" onChange={(e: any) => { setusername(e.target.value) }} className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' required placeholder='username or email' />
                        <span className={"text-sm text-red-400"}>
                            {error.message && error.message}

                        </span>
                    </div>
                </div>
                <div className='space-y-1'>
                    <label htmlFor="">password <span className='text-red-400'>*</span></label>
                    <input type="Password" onChange={(e: any) => { setpassword(e.target.value) }} className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' required />
                </div>
                <div className='flex justify-between text-sm'>
                    <div className='space-x-2'>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <span><Link href={"/"}>Forgot Password?</Link></span>
                </div>

                <div>
                    <button type='submit' className='rounded-full mb-4 w-full p-1.5 bg-black text-white '>Sign In</button>
                    <Link href={'/noauth/accounts/signup'}><button type="button" className='rounded-full w-full p-1 border-2 '>Sign Up</button></Link>
                </div>
            </form>
        </>
    )
}

"use client"
import Loading from '@/app/loading';
import axios from 'axios';
import Link from 'next/link'
import React, { useState } from 'react'

export default function page() {
    const apilink = process.env.REACT_APP_API_URL;

    interface Prop {
        username?: string
        namalengkap?: string
        email?: string
        password?: string
        address?: string
    }

    const [username, setusername] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [address, setaddress] = useState('')
    const [respon, setrespon] = useState<Prop>({})
    const [load, setload]= useState(false)


    const submit = async (e: any) => {
        e.preventDefault()
        const namalengkap = firstname + " " + lastname
        setload(true)
        await axios.post(`${apilink}/api/accounts`, { username, password, namalengkap, email, address }).then(response => {setrespon(response.data); setload(false)})
        
    }
    return (
        <>
         {load && <Loading />}
            <form className={`w-96 flex flex-col gap-4 ${load && 'hidden'}`}  onSubmit={submit}>
                <div >
                    <p className='text-3xl font-medium'>Join To Glary</p>
                    <p className='text-neutral-400'>Knowing the amazing image you can get?</p>

                </div>
                <div className='space-y-1'>
                    <label htmlFor="">Username <span className='text-red-400'>*</span></label>
                    <div>
                        <input type="text" onChange={(e: any) => { setusername(e.target.value) }} id="username" required className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' />
                        <span className={"text-sm text-red-400"}>
                            {respon.username && respon.username[0]}

                        </span>
                    </div>

                </div>
                <div className='space-y-1'>
                    <label htmlFor="">Email <span className='text-red-400'>*</span></label>
                    <div>
                        <input type="email" onChange={(e: any) => { setemail(e.target.value) }} id="email" required placeholder='Using a real email' className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' />

                        <span className={"text-sm text-red-400"}>
                            {respon.email && respon.email[0]}

                        </span>

                    </div>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <div className='space-y-1'>
                            <label htmlFor="">First Name</label>
                            <input type="text" onChange={(e: any) => { setfirstname(e.target.value) }} id="firstname" className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' />
                        </div>
                        <div className='space-y-1'>
                            <label htmlFor="">Last Name</label>
                            <input type="text" onChange={(e: any) => { setlastname(e.target.value) }} id="lastname" className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' />
                        </div>

                    </div>
                    <span className={"text-sm text-red-400"}>
                        {respon.namalengkap && respon.namalengkap[0]}

                    </span>

                </div>
                <div className='space-y-1'>
                    <label htmlFor="">Address</label>
                    <div>
                    <textarea onChange={(e: any) => { setaddress(e.target.value) }} className=' rounded-xl bg-neutral-100 p-2 w-full px-5 outline-none' id="address"></textarea>
                    <span className={"text-sm text-red-400"}>
                    {respon.address && respon.address[0]}

                    </span>

                    </div>
                </div>
                <div className='space-y-1'>
                    <label htmlFor="">Password <span className='text-red-400'>*</span></label>
                    <div>
                    <input type="password" onChange={(e: any) => { setpassword(e.target.value) }} id="password" required className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' />
                    <span className={"text-sm text-red-400"}>
                    {respon.password && respon.password[0]}

                    </span>

                    </div>
                </div>

                <div className='space-x-2'>
                    <input type="checkbox" required name="" id="agree" />
                    <label htmlFor="" className='text-sm'>I agree to all the Term, Privacy Policy and Fees</label>
                </div>

                <div>
                    <button className='mb-4 rounded-full w-full p-1.5 bg-black text-white '>Sign Up</button>
                    <Link href={"/noauth/accounts/signin"}>
                        <button type="button" className='rounded-full w-full p-1 border-2 '>Sign In</button>

                    </Link>
                </div>
            </form>
        </>
    )
}

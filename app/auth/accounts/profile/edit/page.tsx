"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { setDefaultHighWaterMark } from 'stream'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loading from '@/app/loading'

export default function page() {
    interface Props {
        messages?: string
        username?: string
        namalengkap?: string
        alamat?: string

    }

    const route = useRouter()
    const [load, setload] = useState(true)
    const [token, settoken] = useState('')
    const [username, setusername] = useState('')
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [address, setaddress] = useState('')
    const [userid, setuserid] = useState('')
    const [response, setresponse] = useState<Props>({})

    useEffect(() => {
        const token = localStorage.getItem('token')?.slice(1, -1)
        const id = localStorage.getItem('id')
        if (token && id) {
            settoken(token)
            setuserid(id)
            axios.get(`http://127.0.0.1:8000/api/accounts/${id}`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(Response => {
                setusername(Response.data[0].username)
                setfirstname(Response.data[0].namalengkap.split(' ')[0])
                setlastname(Response.data[0].namalengkap.split(' ')[1])
                setemail(Response.data[0].email)
                setaddress(Response.data[0].alamat)
                setload(false)
            })
        }
    }, [])


    const submit = async (e: any) => {
        e.preventDefault()
        setload(true)
        const namalengkap = firstname + " " + lastname
        const formData = new FormData
        formData.append('_method', 'PUT')
        formData.append('username', username)
        formData.append('namalengkap', namalengkap)
        formData.append('address', address)

        await axios.post(`http://localhost:8000/api/accounts/${userid}`, formData, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(Response => {
            if(Response.data.message && Response.data.message == 'berhasil'){
                route.push('/auth/accounts/profile')
            }
            else{
                setresponse(Response.data)
                setload(false)
    
            }
        })

    }
    return (
        <>
            {load && <Loading />}
            <form className={`w-1/2 mx-auto ${load && 'hidden'}`} onSubmit={submit}>
                <div className='flex flex-col gap-5 p-5'>
                    <div className='space-y-1'>
                        <label htmlFor="">Username </label>
                        <div>
                            <input type="text" onChange={(e: any) => { setusername(e.target.value) }} className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' value={username} required placeholder='username or email' />
                            <span className={"text-sm text-red-400"}>
                                {response.username && response.username[0]}

                            </span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="">Description</label>
                        <div>
                            <textarea onChange={(e: any) => { }} className='resize-none text-sm min-h-24 rounded-xl bg-neutral-100 p-2 w-full px-5 outline-none' id="address"></textarea>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-3 '>
                            <div className='space-y-1 w-full'>
                                <label htmlFor="">First Name</label>
                                <div>
                                    <input type="text" onChange={(e: any) => { setfirstname(e.target.value) }} value={firstname} className=' rounded-full outline-none bg-neutral-100 px-5  p-2 w-full ' required placeholder='username or email' />
                                    <span className={"text-sm text-red-400"}>
                                    </span>
                                </div>
                            </div>
                            <div className='space-y-1 w-full'>
                                <label htmlFor="">Last Name</label>
                                <div>
                                    <input type="text" onChange={(e: any) => { setlastname(e.target.value) }} value={lastname} className=' rounded-full outline-none bg-neutral-100 px-5  p-2 w-full ' required placeholder='username or email' />
                                </div>
                            </div>
                        </div>

                        <span className={"text-sm text-red-400"}>
                            {response.namalengkap && response.namalengkap[0]}

                        </span>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="">Email</label>
                        <div>
                            <input type="email" value={email} readOnly onChange={(e: any) => { setemail(e.target.value) }} className=' rounded-full outline-none bg-neutral-300  p-2 w-full px-5' required placeholder='username or email' />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="">Address</label>
                        <div>
                            <textarea onChange={(e: any) => { setaddress(e.target.value) }} className='resize-none text-sm min-h-24 rounded-xl bg-neutral-100 p-2 w-full px-5 outline-none' value={address} id="address"></textarea>
                            {response.alamat && response.alamat[0]}
 
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='rounded-full  w-full p-1.5 bg-black text-white '>Update Profile</button>
                    </div>
                </div>

            </form>
        </>
    )
}

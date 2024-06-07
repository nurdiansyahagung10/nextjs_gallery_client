"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Sectionpostimage from './sectionpostimage'
import { setDefaultHighWaterMark } from 'stream'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Loading from '@/app/loading'

export default function page() {
    const [categories, setcategories] = useState('')
    const [image,setimage] = useState('')
    const [title, settitle] = useState('')
    const [deskripsi, setdeskripsi] = useState('')
    const [token, settoken]= useState('')
    const route = useRouter()
    const [load, setload] = useState(false);
    const apilink = process.env.REACT_APP_API_URL;


    const dropaction = (e:any) => {
        let setfile = document.getElementById('image-input') as HTMLInputElement
        e.preventDefault()
        setfile.files = e.dataTransfer.files
        setimage(URL.createObjectURL(e.dataTransfer.files[0]))
    }

    useEffect(() => {
        const token = localStorage.getItem('token')?.slice(1,-1)
        if(token){
            settoken(token)
        }
    })

    const submit = async (e:any) => {
        e.preventDefault() 
        setload(true)
        const image = e.target[0].files[0]
        const formData = new FormData
        formData.append('image', image)
        formData.append('judulfoto', title)
        formData.append('deksripsi', deskripsi)
        console.log(token)
        await axios.post(`http://localhost:8000/api/image`, formData,{headers:{
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + token 
        }}).then(response => {
            console.log(response)
            if(response.data.messages == 'berhasil'){
                route.push('/auth/accounts/profile')
            }else{
                route.push('/auth/image/post')
            }

        })
    }


    return (
        <>
            {load && <Loading/>}
            <form className=' grid md:grid-cols-3  gap-4' onSubmit={submit}>
                <div className={`px-5 ${!image && 'flex'}  h-full`}>
                    <div  className='rounded-xl  relative inline-block  border-2 border-dashed text-center p-5 w-full '>
                        <input type="file" onChange={(e:any) => {e.target.files[0] && setimage(URL.createObjectURL(e.target.files[0]))}} id="image-input" hidden  />
                        <label onDragOver={(e:any) => {e.preventDefault()}} onDrop={dropaction} htmlFor="image-input" className={` ${image ? 'hidden' : 'flex'} cursor-pointer w-full h-full`}>
                        <div className='  h-full justify-between flex flex-col'>
                            <div className=' flex justify-center flex-1 flex-col'>
                                <span className='text-5xl'><i className="fa-solid fa-file-arrow-up"></i></span>
                                <span className='text-base'>select the image or drop in here</span>
 
                            </div>
                            <p className='text-sm mb-auto text-neutral-400 '>Maxium size of the image is only under 20mb</p>
                        </div>
                        </label>
                        <div  className={`absolute ${image ? 'flex' : 'hidden'}  top-0 z-10  justify-start left-0 right-0 bottom-0 p-8`}>
                            <label htmlFor="image-input" className='bg-white flex cursor-pointer items-center justify-center rounded-full h-8 w-8'><i className="fa-solid fa-pen"></i></label>
                        </div>

                       {image &&  <Sectionpostimage url={image} />}
                    </div>
                </div>
                <div className='md:col-span-2 flex flex-col gap-5 p-5'>
                    <div className='space-y-1'>
                        <label htmlFor="">Tittle <span className='text-red-400'>*</span></label>
                        <div>
                            <input type="text" onChange={(e:any) => {settitle(e.target.value)}} className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' required placeholder='username or email' />
                            <span className={"text-sm text-red-400"}>
                            </span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="">Description</label>
                        <div>
                            <textarea onChange={(e:any) => {setdeskripsi(e.target.value)}} className='resize-none text-sm min-h-24 rounded-xl bg-neutral-100 p-2 w-full px-5 outline-none' id="address"></textarea>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <label htmlFor="">Categorie <span className='text-red-400'>*</span></label>
                        <div className='group relative'>
                            <input type="text" value={categories}  name="" className='cursor-default rounded-full outline-none bg-neutral-100  p-2 w-full px-5' readOnly id="" />
                            <div className="absolute  duration-200 right-0 z-10 mt-2 max-h-0 group-hover:max-h-32 group-hover:overflow-y-scroll group-hover:border group-hover:shadow-sm overflow-hidden w-full origin-top-right rounded-md bg-white   " role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                                <div className='py-1'>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Account settings</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Support</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >License</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Account settings</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Support</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >License</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Account settings</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >Support</button>
                                <button type='button' className='text-neutral-500 w-full text-left hover:bg-neutral-100 hover:text-black block px-4 py-2 text-sm' onClick={(e: any) => { setcategories(e.target.textContent) }} >License</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <button type='submit' className='rounded-full  w-full p-1.5 bg-black text-white '>Sign In</button>
                </div>
                </div>

            </form>
        </>
    )
}

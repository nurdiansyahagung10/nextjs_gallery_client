"use client"
import Loading from '@/app/loading'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props{
    children: React.ReactNode
    addclassname?: string
}

const MiddlewareNo = ({children, addclassname}: Props) => {
    const [status, setstatus] = useState(false)
    const route = useRouter()
    useEffect(() =>{
        if(localStorage.getItem('token')){
            route.push('/')
        }
        else{
            setstatus(true)
        }
    })

    return(
        <main className={addclassname}>
        {status ? children : <Loading />}
        </main>
    )

}

export default MiddlewareNo
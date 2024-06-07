"use client"
import Loading from '@/app/loading'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function SignOut() {
    const route = useRouter()
    const apilink = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const token = localStorage.getItem('token')?.slice(1, -1)

        const fetching = async () => {
            await axios.delete(`http://localhost:8000/api/accounts/1`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }).then(
                response => {
                    localStorage.removeItem('token')
                    route.push('/noauth/accounts/signin')
                }
            ).catch((error) => {
                route.push('/')
            })

        }

        if (token) {
            fetching()
        }

    }, [])



    return (
        <>
            <Loading />
        </>
    )
}

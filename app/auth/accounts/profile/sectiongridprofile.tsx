import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
    imagedata: any
}

export default function Sectiongridprofile({ imagedata }: Props) {
    const apilink = 'http://localhost:8000'

    return (
        <div className='pb-[100%] relative'>
            <Image src={`${apilink}/storage/images/${imagedata.lokasifile}`} alt="" fill objectFit="cover"></Image>
        </div>
    )
}

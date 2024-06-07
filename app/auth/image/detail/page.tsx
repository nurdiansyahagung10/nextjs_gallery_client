import React from 'react'
import Sectionpostimage from '../post/sectionpostimage'
import Image from 'next/image'
import { text } from 'stream/consumers'

export default function page() {
    return (
        <>
            <div className='grid grid-cols-3 xl:px-20'>
                <div>
                    <Sectionpostimage url='https://i.pinimg.com/564x/fb/ef/4d/fbef4d67305a63fb91f45774dd55e671.jpg' />
                </div>
                <div className='p-12  col-span-2 gap-10 flex flex-col'>
                    <div className=' w-full'>
                        <div className='flex justify-between '>
                            <div className='flex gap-3'>
                                <button className='w-11 h-11 relative rounded-full overflow-hidden'>
                                    <Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"></Image>
                                </button>
                                <div className='flex flex-col'>
                                    <span className='font-medium'>Agung</span>
                                    <span className='text-sm'>agung nurdiansyah</span>
                                </div>
                            </div>
                            <ul className='inline-flex items-center space-x-8'>
                                <li className='flex gap-2 items-center'>
                                    <button className='text-xl'><i className="fa-solid fa-comment"></i></button>
                                    <span >0</span>

                                </li>
                                <li className='flex  items-center gap-2'>
                                    <button className='text-xl'><i className="fa-solid fa-heart"></i></button>
                                    <span >0</span>
                                </li>
                                <li>
                                    <button className='text-xl'><i className="fa-solid fa-ellipsis-vertical"></i></button>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='flex items-start'>
                        <div>
                        <span className='font-medium text-2xl'>Title</span>
                        <div className='flex items-baseline'>
                            <p className='text-sm'>Description</p>
                            <span className='text-sm text-neutral-400'>. 20-20-2012</span>

                        </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className=' xl:px-20 flex flex-col gap-5 my-5'>
            <div className='border p-5 rounded-3xl row-span-4'>
                        <div className='flex flex-col gap-7'>
                        <div className='flex gap-3'>
                            <button className='w-10 px-5 h-10 relative rounded-full overflow-hidden'>
                                <Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"></Image>
                            </button>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium'>Agung</span>
                                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit dolor, commodi voluptates hic quidem maxime reiciendis tempora quae, pariatur magni beatae inventore excepturi earum veritatis incidunt neque reprehenderit doloremque?</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <button className='w-10 px-5 h-10 relative rounded-full overflow-hidden'>
                                <Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"></Image>
                            </button>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium'>Agung</span>
                                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit dolor, commodi voluptates hic quidem maxime reiciendis tempora quae, pariatur magni beatae inventore excepturi earum veritatis incidunt neque reprehenderit doloremque?</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <button className='w-10 px-5 h-10 relative rounded-full overflow-hidden'>
                                <Image src={'https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg'} alt="profile" fill objectFit="cover"></Image>
                            </button>
                            <div className='flex flex-col gap-1'>
                                <span className='text-sm font-medium'>Agung</span>
                                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sit dolor, commodi voluptates hic quidem maxime reiciendis tempora quae, pariatur magni beatae inventore excepturi earum veritatis incidunt neque reprehenderit doloremque?</p>
                            </div>
                        </div>

                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <input type="text" className=' rounded-full outline-none bg-neutral-100  p-2 w-full px-5' placeholder='Add Comentar' />
                        <button className='bg-black px-3 text-white rounded-full'><i className="fa-solid fa-paper-plane"></i></button>
                    </div>


            </div>
        </>
    )
}

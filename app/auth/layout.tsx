import MiddlewareOk from '@/components/middlewareok'
import React from 'react'
import SectionNavbarHome from '../sectionnavbarhome'

interface Props {
    children: React.ReactNode
}
export default function layout({ children }: Props) {
    return (
        <MiddlewareOk>
            <SectionNavbarHome />
            <div className="container p-3 mx-auto">
                {children}
            </div>
        </MiddlewareOk>
    )
}

"use client";
import { BtnList } from '@/app/data';
import React from 'react'

const Navigation = () => {
    const angleIncrement = 360 / BtnList.length;
    return (
        <div className='flex items-center justify-between relative'>
            {
                BtnList.map((btn, index) => {
                    return <button>{btn.label}</button>
                })
            }
        </div>
    )
}

export default Navigation

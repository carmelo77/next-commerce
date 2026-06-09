import { titleFont } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
        <Link href="/">
            <span className={`${titleFont.className} antialiased font-bold`}>Next</span>
            <span>| Commerce</span>
            <span>c {new Date().getFullYear()}</span>
        </Link>

        <Link 
            href="/privacy"
            className='mx-3'
        >
            Privacy Policy
        </Link>

        <Link 
            href="/locations"
            className='mx-3'
        >
            Ubicaciones
        </Link>
    </div>
  )
}

'use client'

import Link from "next/link"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

import { titleFont } from "@/config/fonts"
import { useUiStore } from "@/store"

export const TopMenu = () => {

    const openSideMenu = useUiStore((state) => state.openSideMenu)

    return (
        <nav className="flex p-5 justify-between items-center w-full">

            {/* Logo */}
            <div className="">
                <Link href="/">
                    <span className={`${titleFont.className} antialiased font-bold`}>Commerce</span>
                    <span> | shop</span>
                </Link>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kids">Niños</Link>
            </div>

            {/* Search, Cart and menu icons */}
            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-5 h-5" />
                </Link>
                <Link href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" onClick={openSideMenu}>
                    Menú
                </button>

            </div>

        </nav>
    )
}

import Image from "next/image"
import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
    <footer className="p-4 bg-gradient-to-r from-teal-700 via-teal-900 to-black shadow-md shadow-cyan-900 md:px-6 md:py-8 relative inset-x-0 bottom-0">
    <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
        <Image
        src="/logo.png"
        alt="Picture of the author"
        width={60}
        height={60}
        />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Panaverse</span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
            <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6 ">About</Link>
            </li>
            <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
            </li>
            <li>
                <Link href="https://github.com/panaverse" className="mr-4 hover:underline md:mr-6 ">Github</Link>
            </li>
            <li>
                <Link href="https://www.facebook.com/groups/panaverse/" className="hover:underline">Facebook</Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-white sm:mx-auto" />
    <span className="block text-sm text-white sm:text-center">© 3 <Link href="/" className="hover:underline">Panaverse™</Link>. All Rights Reserved.
    </span>
    </footer>
        )
}
export default Footer
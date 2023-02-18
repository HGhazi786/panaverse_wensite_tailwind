"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
    return (
        <nav class="bg-gradient-to-r from-rose-100 to-teal-100 top-0 w-full border-gray-200 sm:px-4 py-2.5 rounded sticky">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="/" class="flex items-center">
        <Image
        src="/logo.png"
        alt="Picture of the author"
        width={60}
        height={60}
        />
        <span class="self-center text-3xl text-slate-900 font-semibold whitespace-nowrap">Panaverse</span>
        </Link>
        <div class="flex md:order-2">
        <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2 text-center mr-3 md:mr-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-red-800" onClick={() => router.push('https://portal.piaic.org/signup')}>Sign-up</button>
        <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul class="flex flex-col p-2 mt-4 border border-transperant rounded-lg bg-transperant md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transperant">
        <li>
            <Link href={'/'} class="block py-2 pl-3 pr-4 text-slate-900 md:hover:text-cyan-500 md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" aria-current="page">Home</Link>
        </li>
        <li>
            <Link href="../About" class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">About</Link>
      </li>
      <li>
        <Link href="#Fcards" class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Faculty</Link>
      </li>
      <li>
        <Link href="#courses" class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Courses</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}
export default Navbar
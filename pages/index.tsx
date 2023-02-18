import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Cards from './components/course_cards'
import Meta from './components/commonjourney'
import Fcards from './components/faculty_cards'
import Ctycards from './components/city_cards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <title>Panverse Home</title>
      <div className="space-y-4 flex flex-wrap">
        <div className=" pl-4 bg-transparent flex w-2/5 h-96">
          <h1 className="pt-20 text-slate-900 text-5xl font-bold text-center">
            <span className="pt-10 text-red-700 text-5xl font-extrabold">
              Education{" "}
            </span>
            is the passport of future for tomorrow belongs to those who prepare
            for it today
          </h1>
        </div>
        <div className="bg-transparent flex w-80 h-0 justify-center"></div>
        <div className="h-96 w-1/3 justify-items-center">
          <Image
            src="/header.webp"
            alt="Picture of the author"
            width={400}
            height={400}
            className="flex-wrap rounded-full"
          />
        </div>
      </div>
      <br></br>
      <div>
        <Meta />
      </div>
      <br></br>
      <div id="courses">
        <h1 className="pl-10 text-slate-900 text-5xl font-bold">Our Courses</h1>
        <Cards />
      </div>
      <br></br>
      <div id="Fcards">
        <h1 className="pl-10 text-slate-900 text-5xl font-bold">
          Learn From Market Leading Experts
        </h1>
        <Fcards />
      </div>
      <br></br>
      <div >
        <h1 className="pl-10 text-slate-900 text-5xl font-bold">
          Now all over Pakistan
        </h1>
        <Ctycards/>
      </div>
    </main>
  );
}

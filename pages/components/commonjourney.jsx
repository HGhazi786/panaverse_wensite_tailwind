import Link from "next/link"
import Image from "next/image"
export default function Meta()
{
    return(
        <main>
        <center>    
        <h1 className='pt-20 text-slate-900 text-5xl font-bold text-center'>Common track</h1>
        </center>
        <div className="pt-4 flex flex-wrap">    
        <div className="h-fit w-2/4 flex-wrap">
            <Image
            src="/meta.png"
            alt="Picture of the author"
            width={900}
            height={900}
            className="flex-wrap"
            />
        </div >
        <div className="pt-8 h-fit w-2/5 flex-wrap inline-flex shadow-lg rounded-2xl">
        <h1 className="font-bold text-xl px-4">Web-3.0 and Metaverse</h1>
        <div>
        <p className="text-slate-900 text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        
        <hr class="h-px my-4 border-teal-700"/>
        <p className="font-bold text-xl px-4">Quater 1</p>
        <p className="text-slate-900 text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        
        <hr className="my-4 border-teal-700" />
        <p className="font-bold text-xl px-4">Quater 2</p>
        <p className="text-slate-900 text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <hr className="my-4 border-teal-700" />
        <p className="font-bold text-xl px-4">Quater 3</p>
        <p className="text-slate-900 text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        <hr className="my-4 border-teal-700" />
    
        <p className="font-bold text-xl px-4">Quater 4</p>
        <p className="text-slate-900 text-base px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        </div>
  <div className="px-6 pt-4 my-3 pb-2">
  <Link href={'https://www.panaverse.co/'} className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</Link>
  </div>
        </div>
        </div>
    </main>
        )
}
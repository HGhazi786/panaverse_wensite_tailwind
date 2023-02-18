import Link from "next/link"
import Image from "next/image"
export default function Cards()
{
    return(
<main>
<div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5" >

<div className="rounded overflow-hidden shadow-lg">
  <Image
      src="/iot.webp"
      alt="Picture of the author"
      width={550}
      height={500}
      />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Internet Of Thing</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link href={'/courses'} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</Link>
  </div>
</div>

<div className="rounded overflow-hidden shadow-lg">
    <Image
      src="/cloud.webp"
      alt="Picture of the author"
      width={550}
      height={500}
      />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Cloud Native</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link href={'/courses'} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</Link>
  </div>
</div>

<div className="rounded overflow-hidden shadow-lg">
  <Image
      src="/chn.webp"
      alt="Picture of the author"
      width={550}
      height={500}
      />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Block Chain</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <Link href={'/courses'} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</Link>
  </div>
</div>


<div className="rounded overflow-hidden shadow-lg">
  <Image
      src="/ai.webp"
      alt="Picture of the author"
      width={550}
      height={500}
      />
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Artificial Inteligence</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <Link href={'/courses'} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</Link>
  </div>
</div>
</div>
</main>

    )
}
import Image from "next/image"
import Link from "next/link"

export default function Fcards()
{
    return(
<main>
<br></br>
<div class="grid lg:grid-cols-3">
    <div class="m-2 bg-transperant rounded-lg shadow-xl lg:flex lg:max-w-lg">
    <div>
    <Image
        src="/zia.webp"
        alt="Picture of the author"
        width={550}
        height={500}
        className="flex-wrap rounded-full"
          />
    </div>
        <div class="p-6 transperant">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Zia Khan</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?</p>
        
        <div className="px-4 pt-4">
            <Link href={'https://www.linkedin.com/in/ziaukhan/'} className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">#Follow me</Link>
        </div>

        </div>
    </div>
    
    <div class="m-2 bg-transperant rounded-lg shadow-xl lg:flex lg:max-w-lg">
    <div>
    <Image
        src="/daniyal.webp"
        alt="Picture of the author"
        width={550}
        height={400}
        className="rounded-full"
        />
    </div>
        <div class="p-6 bg-transperant">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Daniyal Nagori</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?</p>
        <div className="px-4 pt-4">
            <Link href={'https://www.linkedin.com/in/daniyalnagori/'} className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">#Follow me</Link>
        </div>
        </div>
    </div>

    <div class="m-2 bg-transperant rounded-lg shadow-xl lg:flex lg:max-w-lg">
    <div>
    <Image
        src="/adil.webp"
        alt="Picture of the author"
        width={550}
        height={500}
        className="flex-wrap rounded-full"
        />
    </div>
        <div class="p-6 bg-transperant">
            <h2 class="mb-2 text-2xl font-bold text-gray-900">Adil Altaf</h2>
            <p class="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsum
                ab
                rem, consequuntur autem totam sit minima porro?</p>
                <div className="px-4 pt-4">
            <Link href={'https://www.linkedin.com/in/adilaltaf/'} className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:-translate-y-1 hover:scale-110 duration-300">#Follow me</Link>
        </div>
        </div>
    </div>
</div>
</main>
)
}
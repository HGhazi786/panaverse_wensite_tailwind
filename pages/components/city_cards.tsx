import Image from "next/image";
export default function Ctycards() {
  return (
    <main>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/isl.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Islamabad</div>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/karachi.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center text-center">Karachi</div>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/lahore.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Lahore</div>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src="/peshawer.jpg"
            alt="Picture of the author"
            width={550}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Pehawer</div>
          </div>
        </div>
      </div>
    </main>
  );
}

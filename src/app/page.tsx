import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="p-10 bg-gradient-to-r from-black to-gray-900 h-[100vh]">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[90vh]">
          <div className="bg-black border-2 border-white rounded-xl p-5">
            <div className="flex flex-col justify-items-center items-center">
              <Image
                src="/images/Dexter.jpg"
                alt="Profile Pic"
                width={500}
                height={500}
                className="rounded-full w-40 h-40 p-2"
              />
              <div className="text-white text-center">
                <h1 className="font-bold text-3xl">Hi, I am Dexter.</h1>
                <h1 className="font-bold text-xl">
                  I am a Web Developer, Designer, Video Editor and Photographer.
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-black border-2 border-white rounded-xl text-center">
            <h1 className="text-white text-3xl p-5">Skills</h1>
            <ul className="text-white text-3xl space-y-3">
              <li>
                <ul className="flex justify-evenly">
                  <li><Image src="/images/css.png" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/js.jpg" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/nodejs.jpg" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/MongoDB.jpg" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/react.png" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/nextjs.png" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                  <li><Image src="/images/tailwind.png" alt="logos" width={500} height={500} className="rounded-full w-10 h-10 object-contain"/></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="bg-black border-2 border-white rounded-xl grid grid-cols-subgrid gap-4 row-span-2">
            <h2 className="text-3xl text-center text-white p-5">Blog</h2>
          </div>
          <div className="bg-black border-2 border-white rounded-xl">
            <h2 className="text-3xl font-semibold text-center text-white p-5">
              Portfolio
            </h2>
            <ul className="mx-6 grid grid-cols-3 gap-2">
              <li><Image src="/images/pic1.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
              <li><Image src="/images/pic2.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
              <li><Image src="/images/pic3.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
              <li><Image src="/images/pic4.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
              <li><Image src="/images/pic5.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
              <li><Image src="/images/pic6.jpg" alt="portfolio-img" width={500} height={500} className="w-24 h-16 rounded-lg m-2"/></li>
            </ul>
          </div>
          <div className="bg-black border-2 border-white rounded-xl p-4">
            <h2 className="text-3xl font-semibold text-center text-white mt-2 mb-5">Contact</h2>
            <ul className="text-center text-white space-y-3">
              <li className="flex justify-center">
                <i className="material-icons mr-2">call</i> +91-9999900000
              </li>
              <li className="flex justify-center">
                <i className="material-icons mr-2">email</i> dexter@email.com
              </li>
              <li className="flex justify-center">
                <i className="material-icons mr-2">location_on</i> India
              </li>
            </ul>
            <ul className="text-black flex justify-evenly m-6">
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white"><i className="fa fa-linkedin-square"></i></li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white"><i className="fa fa-facebook-square"></i></li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white"><i className="fa fa-youtube-play"></i></li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white"><i className="fa fa-github"></i></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

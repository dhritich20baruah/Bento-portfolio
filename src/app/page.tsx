import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <main className="p-10 bg-gradient-to-b from-black to-gray-700 h-[100vh]">
        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[90vh]">
          <div className="bg-black border-2 border-cyan-700 rounded-xl p-5">
            <div className="flex flex-col justify-items-center items-center">
              <Image
                src="/images/Dexter.jpg"
                alt="Profile Pic"
                width={500}
                height={500}
                className="rounded-full w-40 h-40 p-2"
              />
              <div className="text-cyan-600 text-center">
                <h1 className="font-bold text-3xl">Hi, I am Dexter</h1>
                <h1 className="font-bold text-xl">
                  I am a Web Developer, Designer, Video Editor and Photographer
                </h1>
              </div>
            </div>
          </div>
          <div className="bg-black border-2 border-cyan-700 rounded-xl text-center">
            <h1 className="text-cyan-600 text-6xl p-5">My Resume</h1>
            <ul className="text-cyan-600 text-3xl space-y-3">
              <li>Education</li>
              <li>Experience</li>
              <li>Skills</li>
            </ul>
          </div>
          <div className="bg-black border-2 border-cyan-700 rounded-xl grid grid-cols-subgrid gap-4 row-span-2">
            <h2 className="text-3xl text-center text-cyan-600 p-5">Blog</h2>
          </div>
          <div className="bg-black border-2 border-cyan-700 rounded-xl">
            <h2 className="text-3xl text-center text-cyan-600 p-5">
              Portfolio
            </h2>
          </div>
          <div className="bg-black border-2 border-cyan-700 rounded-xl p-4">
            <h2 className="text-6xl text-center text-cyan-600 mt-2 mb-5">Contact</h2>
            <ul className="text-center text-cyan-600 space-y-3">
              <li className="flex justify-center">
                <i className="material-icons">call</i> +91-9999900000
              </li>
              <li className="flex justify-center">
                <i className="material-icons">email</i> dexter@email.com
              </li>
              <li className="flex justify-center">
                <i className="material-icons">location_on</i> India
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

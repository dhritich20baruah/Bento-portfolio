import Image from "next/image";
import Link from "next/link";
import dbConnect from "../utils/dbConnect";
import Blog, { BlogType } from "./models/Blog";
import { Document } from "mongoose";

type BlogPosts = Document & BlogType;

export default async function Home() {
  dbConnect();
  let items: BlogPosts[] = await Blog.find({}).sort({ dated: -1 }).limit(5);

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
            <div>
              <ul className="flex justify-evenly text-black">
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="html.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="css3.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="javascript.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="tailwindcss.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-10 h-10 rounded-lg m-2"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="reactjs.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="nextjs.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="mongodb.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
                <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="postgresql.svg"
                    alt="logo"
                    width={500}
                    height={500}
                    className="w-8 h-8"
                  />
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-20">
              <Link href="/Resume">
                <button className="p-1 bg-black border-4 font-bold border-white text-white hover:bg-white hover:text-black">
                  RESUME
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-black border-2 border-white rounded-xl row-span-2">
            <h2 className="text-3xl text-center text-white p-5">Blog</h2>
            <div>
              {items.map((item) => {
                return (
                    <Link href={"/Blog/" + item._id} key={item._id}>
                      <ul className="text-black m-5 p-5 rounded-md bg-white hover:shadow-gray-700 shadow-lg">
                        <li className="text-lg font-semibold hover:cursor-pointer">
                          {item.title}
                        </li>
                      </ul>
                    </Link>      
                );
              })}
               <div className="flex justify-center">
                      <Link href="/Blog">
                        <button className="p-1 bg-black border-4 font-bold border-white text-white hover:bg-white hover:text-black">
                          VIEW ALL
                        </button>
                      </Link>
                    </div>
            </div>
          </div>
          <div className="bg-black border-2 border-white rounded-xl">
            <h2 className="text-3xl font-semibold text-center text-white p-5">
              Portfolio
            </h2>
            <ul className="mx-6 grid grid-cols-3 gap-2">
              <li>
                <Image
                  src="/images/pic1.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
              <li>
                <Image
                  src="/images/pic2.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
              <li>
                <Image
                  src="/images/pic3.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
              <li>
                <Image
                  src="/images/pic4.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
              <li>
                <Image
                  src="/images/pic5.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
              <li>
                <Image
                  src="/images/pic6.jpg"
                  alt="portfolio-img"
                  width={500}
                  height={500}
                  className="w-24 h-16 rounded-lg m-2"
                />
              </li>
            </ul>
          </div>
          <div className="bg-black border-2 border-white rounded-xl p-4">
            <h2 className="text-3xl font-semibold text-center text-white mt-2 mb-5">
              Contact
            </h2>
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
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">
                <i className="fa fa-linkedin-square"></i>
              </li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">
                <i className="fa fa-facebook-square"></i>
              </li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">
                <i className="fa fa-youtube-play"></i>
              </li>
              <li className="text-2xl bg-white py-1 px-2 rounded-md hover:cursor-pointer hover:bg-black hover:text-white">
                <i className="fa fa-github"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

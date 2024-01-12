import parse from "html-react-parser"
import Link from "next/link"
import Blog, {BlogType} from "../models/Blog"
import { Document } from "mongoose"
import dbConnect from "../../utils/dbConnect"

type BlogPosts = Document & BlogType

export default async function Blogs(){
    dbConnect()
    let items: BlogPosts[] = await Blog.find({}).sort({dated: -1})
    return(
        <>
             <h1 className="text-center text-4xl text-white underline my-10">BLOG</h1>
            <div>
                {items.map((item)=>{
                    return(
                        <Link href={"/Blog/"+item._id}  key={item._id} >
                        <ul className="bg-white m-10 p-5 rounded-md">
                            <li className="text-lg">{item.title}</li>
                            <li className="italic font-sans">&quot;{parse((`${item.content}`).slice(0,200))}....&quot;</li>
                            {/* <li className="text-red-600 italic text-left">{item.dated}</li> */}
                        </ul>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
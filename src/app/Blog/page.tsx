"use client"
import { useEffect, useState } from "react"
import parse from "html-react-parser"
import Link from "next/link"
import axios from "axios"

type itemsType = {
    _id: string,
    title: string;
    content: string
}

export default function Blogs(){
    const [items, setItems] = useState<itemsType[]>([])
    useEffect(()=>{
        axios.get('/api/posts').then((res)=> setItems(res.data))
    }, [])
    console.log(items)
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
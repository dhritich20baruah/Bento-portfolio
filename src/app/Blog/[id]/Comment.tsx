"use client"
import React, {useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import postComment from "./PostComment"

type CommentComponentProps = {
    blogsId: string;
}

const CommentSection: React.FC<CommentComponentProps> =({blogsId}) => {
    const [comment, setComment] = useState("")
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPic, setUserPic] = useState("")
    const handleSubmit = async () => {
        await postComment({
          commentStr: comment,
          userNameStr: userName,
          userEmailStr: userEmail,
          userPicStr: userPic,
          blogIdStr: blogsId,
        });
        window.location.reload();
      };

    return(
        <div className="my-8">
            <p className="font-semibold">Hello, please leave your comment here.</p>
            <input type="text" name="comment" id="comment" className='w-[90%] outline-none border-b-2 border-slate-600 p-2'onChange={(e)=>setComment(e.target.value)}/>
            <button className="p-2 ml-3 hover:cursor-pointer border-black hover:border-2" onClick={handleSubmit}><Image src="/send.svg" alt="" width={500} height={500} className="w-5 h-5"/></button>

        </div>
    )
}

export default CommentSection;

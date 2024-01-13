"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import postComment from "./PostComment";

interface CommentComponentProps {
  blogsId: string; // Adjust the type based on the actual data type of blogsId
}

const CommentComponent: React.FC<CommentComponentProps> = ({ blogsId }) => {
  const [comment, setComment] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPic, setUserPic] = useState<string>("");

  const { data: session } = useSession();

  const handleSubmit = async () => {
    await postComment(comment, userName, userEmail, userPic, blogsId);
    window.location.reload();
  };

  const logOut = () => {
    localStorage.clear();
    signOut();
  };

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    const storedUserPic = localStorage.getItem("userPic");

    if (session) {
      setUserName(session?.user?.name);
      setUserEmail(session?.user?.email);
      setUserPic(session?.user?.image);
      localStorage.setItem("userName", session?.user?.name || "");
      localStorage.setItem("userPic", session?.user?.image || "");
    } else if (storedUserName) {
      setUserName(storedUserName);
      setUserPic(storedUserPic || "");
    }
  }, [session]);

  return (
    <div className="my-8">
      {session ? (
        <div>
          <p className="font-semibold">
            Hello {userName}, please leave your comment here.
          </p>
          <input
            type="text"
            name="comment"
            id="comment"
            className="w-[80%] outline-none border-b-2 border-slate-600 p-2"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className="p-2 text-white bg-yellow-600 ml-3 hover:cursor-pointer hover:bg-red-900"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="p-2 text-white bg-red-600 ml-3 hover:cursor-pointer hover:bg-red-900"
            onClick={logOut}
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="p-2">
          <p>
            You are not signed in. Please{" "}
            <span
              onClick={signIn}
              className="text-blue-800 underline hover:cursor-pointer"
            >
              sign in
            </span>{" "}
            to comment.
          </p>
        </div>
      )}
    </div>
  );
};

export default CommentComponent;

// "use server"
import dbConnect from '@/utils/dbConnect';
import Comment, {CommentType} from '@/app/models/Comment';

type PostCommentData = {
  commentStr: string;
  userNameStr: string;
  userEmailStr: string;
  userPicStr: string;
  blogIdStr: string;
};

const postComment = async ({
    commentStr,
    userNameStr,
    userEmailStr,
    userPicStr,
    blogIdStr,
  }: PostCommentData) => {
    try {
      await dbConnect();
  
      const comment: string = commentStr;
      const userName: string = userNameStr;
      const userEmail: string = userEmailStr;
      const userPic: string = userPicStr;
      const blogId: string = blogIdStr;
  
      const newComment: CommentType = new Comment({ comment, userName, userEmail, userPic, blogId });
      await newComment.save();
  
      console.log(newComment);
    } catch (error) {
      console.error(error);
    }
  };

  export default postComment;

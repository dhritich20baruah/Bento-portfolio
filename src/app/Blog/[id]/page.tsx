import parse from "html-react-parser";
import dbConnect from "@/utils/dbConnect";
import Blog, { BlogType } from "@/app/models/Blog";
import { Document } from "mongoose";
import Link from "next/link";
import Comment, {CommentType} from "@/app/models/Comment";
import CommentSection from "./Comment";

type BlogPosts = Document & BlogType;
type Comments = Document & CommentType;

export default async function post({ params }: { params: { id: string } }) {
  dbConnect();
  const postID = params?.id;
  const data: any = postID ? await Blog.findById({ _id: postID }) : null;
  let items: BlogPosts[] = await Blog.find({}).sort({ dated: -1 }).limit(5);

  let CommentArr: Comments[] = await Comment.find({}).sort({ date: -1 })

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-1 h-[100vh]">
      <div className="m-5 bg-white p-5 rounded-md space-y-5 grid col-span-2 overflow-auto row-span-2">
        <h1 className="text-lg font-semibold">{data.title}</h1>
        <div className="">{parse(`${data.content}`)}</div>
      </div>
      <div className="bg-black m-5 border-2 border-white rounded-xl row-span-3">
        <h2 className="text-xl text-center text-white p-5">Recent posts</h2>
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
      <div className="m-5 bg-white px-5 rounded-md col-span-2 overflow-auto">
      <CommentSection blogsId={postID}/>
      {/* <CommentSection/> */}
                {CommentArr.map((e)=>{
                    return(
                        <div className="border-2 p-3 m-3 border-gray-500 rounded-md" key={e._id}>
                           <div className="flex space-x-4 my-3">
                            <img src={e.userPic} className="rounded-full w-6 h-6" alt="" />
                            <p className="font-semibold mb-3">{e.userName}</p>
                           </div>
                            <p className="italic font-serif">{e.comment}</p>
                        </div>
                    )
                })}
      </div>
    </div>
  );
}

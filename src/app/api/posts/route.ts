import dbConnect from "../../../utils/dbConnect";
import { NextResponse } from "next/server";
import Blog from "@/app/models/Blog";
import { BlogType } from "@/app/models/Blog";
import mongoose from "mongoose";

export async function POST(req: Request, res: Response) {
  try {
    await dbConnect();
    const { title, content } = await req.json();
    let newBlog = new Blog({title, content}) as BlogType
    await newBlog.save();
    return NextResponse.json({ status: "OK!! Blog Saved", newBlog});
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error: ", error}, {status: 500 });
  }
}

export async function GET(req: Request, res: Response){
  let posts = await Blog.find({})
  return NextResponse.json(posts)
}
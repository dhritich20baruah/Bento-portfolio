import parse from 'html-react-parser'
import dbConnect from '@/app/utils/dbConnect'
import Blog from '@/app/models/Blog'

export default async function post({params}: {params: {id: string}}){
    dbConnect()
    const postID = params?.id 
    const data: any = postID ? await Blog.findById({_id: postID}) : null

    return(
        <main className="m-10 bg-white p-5 rounded-md space-y-5">
            <h1 className="text-lg font-semibold">{data.title}</h1>
            <div className="">{parse(`${data.content}`)}</div>
        </main>
    )
}
"use server"
import dbConnect from "@/utils/dbConnect"
import Comment, {CommentType} from "@/app/models/Comment"

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
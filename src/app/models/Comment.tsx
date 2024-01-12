import mongoose, { Document, Schema, Model } from 'mongoose';

export type CommentType = Document & {
  comment: string;
  userName: string;
  userEmail: string;
  userPic: string;
  blogId: string;
  date: Date;
}

const commentSchema:Schema<CommentType> = new Schema({
  comment: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPic: {
    type: String,
  },
  blogId: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

mongoose.models = {}

const Comment: Model<CommentType> = mongoose.model<CommentType>('Comment', commentSchema);

export default Comment;

import mongoose, {Schema, Document, Model} from 'mongoose'

export type BlogType = Document & {
    title: string;
    content: string;
    dated: Date;
}

const blogSchema: Schema<BlogType> = new Schema({
    title: String,
    content: String,
    dated: {
        type: Date,
        default: Date.now,
    },
})

mongoose.models = {}

const Blog: Model<BlogType> = mongoose.model<BlogType>('Blog', blogSchema);

export default Blog
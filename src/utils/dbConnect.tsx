const mongoose = require('mongoose')
// const key = process.env.MONGO_URI

export default async function dbConnect(){
    try{
       await mongoose.connect('mongodb://localhost/bento').then(()=>console.log('Database connected'))
    }
    catch(error){
        console.error("Error in database connection: ", error)
    }
}
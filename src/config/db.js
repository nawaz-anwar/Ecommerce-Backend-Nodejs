const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://codingdays576:LOJYWHTeldd9bHpl@cluster0.0ij5wqu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}
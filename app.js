const express = require("express")
const mongoose = require("mongoose")
const pdfRoutes = require('./routes/pdfRoutes')

const app = express()

app.use(express.json())



mongoose.connect("mongodb+srv://pdd:7oKEalPA3OOKdk3F@cluster0.qsut9rt.mongodb.net/pdfStore?retryWrites=true&w=majority"
).then(()=>
    console.log("Connected To Database"))
    .then(()=>{
        app.listen(7000)
    }).catch((err)=>console.log(err))



    app.use('/pdf',pdfRoutes)


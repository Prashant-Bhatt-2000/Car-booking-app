import dotenv from 'dotenv'
import app from './app.js'
import mongoConnection from './database/mongoConnection.mjs'


dotenv.config({path: './config/config.env'})

const client = mongoConnection()
app.locals.mongoClient = client

app.listen(process.env.PORT, ()=>  { 
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})
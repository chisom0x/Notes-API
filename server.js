const app =require('./app');
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})


const DB = process.env.DB_URL

mongoose.connect(DB).then(con => {
    console.log('DB CONNECTED')
})















const port = 8000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
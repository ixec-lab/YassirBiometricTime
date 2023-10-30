import express from 'express'
import route from './routes/routers.js'
import config from './config/ecosystem.js'

const app = express()
app.use(route)

// listener
app.listen(process.env.APP_PORT, ()=>{
    console.log("application starts successfuly")
})
import express from 'express'
import 'dotenv/config'
import 'express-async-errors'

import connectDB from './db/connect.js'

import notFound from './middlewares/notFound.js'
import errorHandler from './middlewares/errorHandler.js'

import productsRouter from './routes/products.js'

const app = express()
const PORT = process.env.PORT
const HOST = process.env.HOST

const server = () => {
    app.listen(PORT, HOST, () => {
        console.log(`server started...`)
    })
}
connectDB(server)

app.use(express.json())
app.use(express.static('./public'))

app.use('/api/v1/products', productsRouter)
app.get('/', (req, res) => {
    res.status(200).send(`<h1>Welcome to Store API</h1><a href='/api/v1/products'>product api</a>`)
})

app.use(notFound)
app.use(errorHandler)
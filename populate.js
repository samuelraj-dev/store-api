import connectDB from './db/connect.js'
import Product from './models/Product.js'

import data from './products.json' assert { type: 'json' }

const temp = () => {
    connectDB(async () => {
        try {
            await Product.deleteMany()
            await Product.create(data)
        } catch (err) {
            console.log(err)
        }
    })
}

export default temp
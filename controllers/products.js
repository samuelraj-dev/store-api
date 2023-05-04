import Product from '../models/Product.js'

const getAllProductsStatic = async (req, res) => {
    const products = await Product.find( {} ).sort('-name')
    res.status(200).json(products)
}

const getAllProducts = async (req, res) => {
    console.log(req.query)
    const { featured, company, name, sort, select, limit } = req.query
    const queryObj = {}
    let querySort, querySelect, queryLimit
    querySort = querySelect = queryLimit = ''
    
    if (featured) {
        queryObj.featured = featured === 'true' ? true : false
        console.log(queryObj)
    }
    if (company) {
        queryObj.company = company
    }
    if (name) {
        queryObj.name = { $regex: name, $options: 'i' }
    }
    if (sort) {
        querySort = sort.split(',').join(' ')
    } else {
        querySort = 'createdAt'
    }
    if (select) {
        querySelect = select.split(',').join(' ')
    }
    if (limit) {
        queryLimit = limit
    }

    const products = await Product.find(queryObj).sort(querySort).select(querySelect).limit(Number(limit))
    res.status(200).json({ products, count: products.length})
}

export {
    getAllProducts,
    getAllProductsStatic,
}
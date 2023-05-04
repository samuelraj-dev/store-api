const errorHandler = (err, req, res, next) => {
    return res.status(500).json({ message: `something went wrong, please try again later...` })
}

export default errorHandler
module.exports = app => {
    const get = (req, res) => {
        res.status(200).json({id: 1, name: 'harry potter', ano: 2001})
    }

    return { get }
}
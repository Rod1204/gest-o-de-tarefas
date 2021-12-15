module.exports = app => {
    app.get('/', app.api.movies.get)
}
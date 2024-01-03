const blogRouter = require('./blog');
const productRouter = require('./product');
const productRouter = require('./product');

function route(app) {
    app.use('/api/blogs', blogRouter);
    app.use('/api/products', productRouter);
}

module.exports = route;
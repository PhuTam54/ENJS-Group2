const blogRouter = require('./blog');
const productRouter = require('./product');
const userRouter = require('./user');

function route(app) {
    app.use('/api/blogs', blogRouter);
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);
}

module.exports = route;
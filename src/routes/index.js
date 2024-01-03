const blogRouter = require('./blog');
const productRouter = require('./product');
const userRouter = require('./user');
const orderRouter = require('./order');

function route(app) {
    app.use('/api/blogs', blogRouter);
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);
    app.use('/api/orders', orderRouter);
}

module.exports = route;
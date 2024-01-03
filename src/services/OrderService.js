const OrderModel = require('../app/models/Order');

module.exports.getAllOrders = async () => {
    return await OrderModel.find();
};

module.exports.createOrder = async (Order) => {
    return await OrderModel.create(Order);
};

module.exports.getOrderById = async (id) => {
    return await OrderModel.findById(id);
};
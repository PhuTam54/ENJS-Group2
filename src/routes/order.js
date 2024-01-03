const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/OrderController');

router.get('/', orderController.getAllOrders);
router.post('/', orderController.createOrder);

router.get('/:id', orderController.getOrderById);

module.exports = router;

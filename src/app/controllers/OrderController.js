const orderService = require("../../services/OrderService");

class OrderController {
    getAllOrders = async (req, res) => {
        try {
            const orders = await orderService.getAllOrders()
            res.json({ data: orders, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    createOrder = async (req, res) => {
        try {
            const order = await orderService.createOrder(req.body)
            res.json({ data: order, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    getOrderById = async (req, res) => {
        try {
            const order = await orderService.getOrderById(req.params.id)
            res.json({ data: order, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
}

module.exports = new OrderController()
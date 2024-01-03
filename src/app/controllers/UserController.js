const userService = require("../../services/UserService");

class UserController {
    getAllUSers = async (req, res) => {
        try {
            const users = await userService.getAllUSers()
            res.json({ data: users, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    createUSer = async (req, res) => {
        try {
            const user = await userService.createUSer(req.body)
            res.json({ data: user, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    getUSerById = async (req, res) => {
        try {
            const user = await userService.getUSerById(req.params.id)
            res.json({ data: user, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    updateUSer = async (req, res) => {
        try {
            const user = await userService.updateUSer(req.params.id, req.body)
            res.json({ data: user, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    deleteUSer = async (req, res) => {
        try {
            const user = await userService.deleteUSer(req.params.id)
            res.json({ data: user, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
}

module.exports = new userController()
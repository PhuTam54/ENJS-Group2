const UserService = require("../../services/UserService");

class UserController {
    getAllUsers = async (req, res) => {
        try {
            const Users = await UserService.getAllUsers()
            res.json({ data: Users, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    createUser = async (req, res) => {
        try {
            const User = await UserService.createUser(req.body)
            res.json({ data: User, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    getUserById = async (req, res) => {
        try {
            const User = await UserService.getUserById(req.params.id)
            res.json({ data: User, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    updateUser = async (req, res) => {
        try {
            const User = await UserService.updateUsSer(req.params.id, req.body)
            res.json({ data: User, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
    
    deleteUser = async (req, res) => {
        try {
            const User = await UserService.deleteUser(req.params.id)
            res.json({ data: User, status: "success" })
        } catch (err) {
            res.status(500).json({ err: err.message })
        }
    }
}

module.exports = new UserController()
const UserModel = require("../app/models/User")

exports.getAllUSers = async() => {
    return await UserModel.find();
}

exports.createUSer = async (user) => {
    return await UserModel.create(user);
}
exports.getUSerById = async (id) => {
    return await UserModel.findById(id);
}
exports.updateUSer = async (id, user) => {
    return await UserModel.findByIdAndUpdate(id, user);
}
exports.deleteUSer = async (id) => {
    return await UserModel.findByIdAndDelete(id);
}

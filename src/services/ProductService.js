const ProductModel = require("../app/models/Product")

exports.getAllProduct = async() => {
    return await ProductModel.find();
}

exports.createProduct = async (product) => {
    return await ProductModel.create(product);
}
exports.getProductById = async (id) => {
    return await ProductModel.findById(id);
}
exports.updateProduct = async (id, product) => {
    return await ProductModel.findByIdAndUpdate(id, product);
}
exports.deleteProduct = async (id) => {
    return await ProductModel.findByIdAndDelete(id);
}

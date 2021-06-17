const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type: String},
    category: {type: String},
    sex: {type: String},
    brand: {type: String},
    price: {type: Number},
    quantity: {type: Number},
    image: {type: String},
    description: {type: String}
});
productSchema.statics = {      // statics chỉ sử dụng trong phạm vi để tìm các bản ghi 
    findAllProduct() {
        return this.find().exec();
    },
    findProductById(id) {
        return this.findById(id).exec();
    },
    findProductByName(keyword) {
        return this.find(keyword).exec();
    }
};

const productModel = mongoose.model('product', productSchema)

module.exports = productModel;


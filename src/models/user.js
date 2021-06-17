const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {type: String, required: true, trim: true, unique: true,},
    role: {type: String, enum: ['admin', 'customer']},
    password: {type: String, required: true, trim: true, minlength: 6}
});
userSchema.statics = {      // statics chỉ sử dụng trong phạm vi để tìm các bản ghi 
    createNew(item) {
        return this.create(item); // Tạo item mới và return ra một promise 
    },
    findByEmail(email) {
        return this.findOne({email: email}).exec();
    },
    findUserById(id) {
        return this.findById(id).exec();
    }
};
userSchema.methods = {      // method sử dụng khi đã tìm được bản ghi, tìm được mật khẩu rồi đem so sánh
    comparePassword(password) {
        return bcrypt.compare(password, this.password)
    }
}


const userModel = mongoose.model('user', userSchema)

module.exports = userModel


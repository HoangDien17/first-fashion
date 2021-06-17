const productModel = require('../../models/product');
const Cart = require('../../models/cart');


class UpdateCartController {
    getCart (req, res, next) {
        res.render('cart');
    }
    postUpdateCart(req, res) {
        var quantityUpdate = req.body.quantityUpdate;
        var productId = req.body.idUpdate;
        var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});

        cart.update(productId, quantityUpdate);
        req.session.cart = cart;
        res.redirect('back')
    }
}

module.exports = new UpdateCartController;

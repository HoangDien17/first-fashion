const productModel = require('../../models/product');
const Cart = require('../../models/cart');

class CartController {
    postAddCart(req, res, next) {
        var productId = req.body.idItem;
        var productqty = req.body.quantityItem;
        // console.log(productqty);
        var cart = new Cart(req.session.cart ? req.session.cart : {items: {}});
        productModel.findProductById(productId)
        .then(product => {
            product = product?product.toObject():product;
            cart.add(product, productId, productqty);
            req.session.cart = cart;
                //res.redirect('/detail/'+productId+'');  // Nếu click nút thêm vào giỏ hàng
            res.render('cart'); // Nếu click nút mua ngay.
            })
        .catch(next);
 
    }
    
    getCart (req, res, next) {
        res.render('cart')
    };
    
}

module.exports = new CartController;


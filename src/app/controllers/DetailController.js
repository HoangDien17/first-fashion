const productModel = require('../../models/product');

class DetailController {
    getDetail(req, res, next) {
        var productId = req.params.id;
        productModel.findProductById(productId)
        .then(product => {
            // product = product.map(product => product.toObject()) // Chuyển object document sang object thường
            product = product?product.toObject():product;
            res.render('detail', { product });
        })
        .catch(next);
    }
};

module.exports = new DetailController;

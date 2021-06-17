const productModel = require('../../models/product');

class HomeController {
    //Get product detail
    indexProduct(req, res, next) {
        // Product detail
        productModel.findAllProduct()
        .then(products => {
            products = products.map(product => product.toObject()) // Chuyển object document sang object thường
            res.render('home', { products });
        })
        .catch(next); 
    }

    indexPostSearch(req, res, next) {
        var regex = new RegExp(req.body.q, 'i');
        productModel.findProductByName({name: regex})
        .then(products => {
            products = products.map(product => product.toObject()) // Chuyển object document sang object thường
            res.render('home', { products });
        })
        .catch(next); 
    }
}

module.exports = new HomeController;

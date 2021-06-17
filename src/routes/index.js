const loginRouter = require('./login');
const homeRouter = require('./home');
const registrationRouter = require('./registration');
const logoutRouter = require('./logout');
const cartRouter = require('./cart');
const updateCartRouter = require('./updatecart');
const detailRouter = require('./detail');


function router(app) {
    app.use('/', detailRouter);
    app.use('/cart', cartRouter);
    app.use('/updatecart', updateCartRouter);
    app.use('/registration', registrationRouter);
    app.use('/login', loginRouter);
    app.use('/logout', logoutRouter);
    app.use('/', homeRouter);
    

}

module.exports = router;

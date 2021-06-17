
class LoginController {
    //Get login 
    index(req, res) {
        res.render('login'); 
    }
}
module.exports = new LoginController;




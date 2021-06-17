
class LogoutController {
    index(req, res) {
        req.logout();
        res.redirect('/')
    }
};

module.exports = new LogoutController;

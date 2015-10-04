exports.render = function(req, res) {
    res.render('index', {
    	title: 'NSITONLINE adminforum',
    	user: req.user ? req.user.username : ''
    });
};
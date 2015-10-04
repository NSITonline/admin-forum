var users = require('../../app/controllers/users.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/forumques').post(users.create).get(users.list);

	app.route('/forumques/:quesId').get(users.read).put(users.update).delete(users.delete);

	app.param('quesId', users.userByID);


	app.route('/login')
		.get(users.renderLogin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: 'http://www.nsitonline.in/',
			failureFlash: true
		}));

	app.get('/logout', users.logout);

	
};
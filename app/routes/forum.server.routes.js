module.exports = function(app) {
    var forum = require('../controllers/forum.server.controller');
    app.get('/forum', forum.render);
};
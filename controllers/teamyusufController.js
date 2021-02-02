var models = require('../models/index');

exports.create_post = function (req, res) {
	models.User.create({
		username: req.body.username
	}).then(function () {
		res.redirect('/');
	});
};

exports.delete_user_get = function (req, res) {
	models.User.destroy({
		where: {
			id: req.params.user_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_teamyusuf_post = function (req, res) {
	models.Teamyusuf.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_teamyusuf_get = function (req, res) {
	models.Teamyusuf.destroy({
		where: {
			id: req.params.teamyusuf_id
		}
	}).then(function () {
		res.redirect('/');
	});
};
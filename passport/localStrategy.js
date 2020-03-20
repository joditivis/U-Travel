const User = require('../database/models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	// {
	// 	username: 'email'
	// },
	function(email, password, done) {
		console.log(email, password);
		User.findOne({ 
			email: email 
			}, (err, user) => {
			if (err) {
				console.log("error happening");
				return done(err)
			}
			if (!user) {
				console.log("no user happening");
				return done(null, false, { 
					message: 'Incorrect email' 
				})
			}
			if (!user.checkPassword(password)) {
				console.log("no password");
				console.log(err)
				return done(null, false, { 
					message: 'Incorrect password' 
				})
			}
			console.log("anything else");
			return done(null, user)
		});
	}
)

module.exports = strategy;
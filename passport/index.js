const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const User = require('../database/models/user');

// Save the user id (the second argument of the done function) in a session
// It is used later to retrieve the whole object through the deserializeUser function
passport.serializeUser((user, done) => {
	console.log('*** serializeUser called, user: ')
	console.log(user) // raw user object
	console.log('---------')
	done(null, { _id: user._id })
});

// Retrieve the user id from the stored session
passport.deserializeUser((id, done) => {
	console.log('DeserializeUser called');
	// Check the User table for a matching user id and pass 
	// the user information into the parameter of the callback function
	User.findOne(
		{ _id: id },
		'username',
		(err, user) => {
			console.log('*** Deserialize user, user:')
			console.log(user)
			console.log('--------------')
			done(null, user)
		}
	)
});

// Use Strategies 
passport.use(LocalStrategy);

module.exports = passport;
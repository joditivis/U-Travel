const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

// Define userSchema
const userSchema = new Schema({

	userName: {
		type: String,
		trim: true,
		required: true,
		unique: true,
		validate: [
			function(input) {
			return input.length > 0;
			},
		 "Please enter a name."
		]
	},
	email: { 
		type: String, 
		trim: true,
		required: true, 
		unique: true,
		match: [/.+@.+\..+/, "Please enter a valid email address."] 
	},
	password: { 
		type: String, 
		trim: true,
		required: "Password Required",
		validate: [
			function(input) {
				return input.length >= 8;
			},
			"Password must be at least 8 characters."
		]
	}
});

// Define schema methods
userSchema.methods = {
	// This will check if an unhashed password 
	// entered by the user can be compared to the hashed password stored in our database
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	// Hash password turns user's password into randomly generated 
	// characters so their password isn't exposed inside the database
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next();
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password);
		next();
	}
});

const User = mongoose.model('User', userSchema);
module.exports = User;
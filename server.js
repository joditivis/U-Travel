//require(`dotenv`).config({ path: './client' });
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./database') ;
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const path = require('path'); 

// Route requires
const user = require('./routes/user');

const app = express();
const cors = require("cors");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  //app.use(express.static('client/build'));
  app.use(express.static(path.join(__dirname, 'client/build')));
};

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Session to keep track of the login credentials
app.use(
	session({
		secret: 'tootsie-roll', // random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
//**** UNCOMMENT THIS WHEN WE SETUP ROUTES */
// app.use(routes);
app.use('/user', user);

// Routes
require("./routes/apiRoutes")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/utravel');

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}! ${process.env.MONGODB_URI}`);
});

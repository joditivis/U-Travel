# U-Travel
Planning a trip? Want to search for flight and hotel to get to your destination? Do all that and more in our U-Travel application. U-Travel also provides a one-stop place to organize all of your trip expenses and track how close you are to your goal. Never get caught overspending on a trip again and never leave anything at home with a customizable packing list at your disposal.

Access this site at: https://u-travel-dt.herokuapp.com/.

## Table of Contents
* [About](#about)
* [Functionality](#functionality)
* [Technical Features](#technical-features)
* [Requirements](#requirements)
* [Build Tools](#build-tools)
* [Acknowledgements](#acknowledgements)
* [License](#license)

## About
This is a full-stack deployed website that allows the user to create an account using Passport authentication. Before logging in, a user can perform a flight or hotel search, however, the magic comes when setting up an account so that they can save all of their trip information. 

## Functionality
The user will start on the landing page. By hitting Start Planning, the user will be directed to create a new account.

<!-- <img src="/assets/images/login.gif"> -->

Once logged in, they are immediately directed to their userpage. The userpage is directly tied to a trip. This is where the planning starts. A user can add an activity with the amount that it will cost. This is directly tied to a chart for a great visualization of where their money is being spent. They can also add to their packing list and check off items once they are packed. 
<!-- 
<img src="/assets/images/category.gif"> -->

More times than not, a trip will include a flight. Go to the flight search page where there is a robust set of options to search for flight inforamtion. As long as a user is logged in, they can save a flight itinary to view it on their user page.

<!-- <img src="/assets/images/charity.gif"> -->

What about the hotel? No problem - the hotel search will also provide a great place to see what hotels are in the area. These can also be saved to your trip as well.

<!-- <img src="/assets/images/profile.gif"> -->

See your whole trip at a glance - expenses, flights, hotels, days until the trip starts, and the weather at your destination. Feel free to use the weather search bar to see the upcoming forecast in any city!

## Technical Features
* This application utlizes a MERN stack - MongoDB, Express, React, and Node.js.
* The authentication encyrption is managed by Passport.js.
* This application is deployed on Heroku.

## Requirements
If you are running from the deployed Heroku site, then there are no requirements to use. You can access directly at https://egyptian-tsunamis.herokuapp.com/.

If you would like to fork this application and run directly, then you will need to run:
`npm install`
in the local root folder. Note: you'll want to ensure that the command `cd client && npm install` runs as well as there is a `package.json` in both the root
folder and the client React folder.

In order to run, you will need to prime your database:
   * Step One: Ensure you have mongodb installed on your local machine. Open an instance allowing you to add a database.

   * Step Two: Run `use utravel`. This will initialize an empty database that this code can use.

   * Step Three: You will need a Amadeus Navigator AMADEUS_CLIENT_ID and AMADEUS_CLIENT_SECRET. This can be obtained at https://developers.amadeus.com/.
   
   * Step Four: Create a file named `.env`, in the root folder, add the following to it:

```js
 # Amadeus API keys

AMADEUS_CLIENT_ID= // enter your Amadeus Client_ID
AMADEUS_CLIENT_SECRET= // enter your Amadeus Client_Secret

```
   * Step Five: You will need a Weather Bit API Key. This can be obtained at https://www.weatherbit.io/api.
   
   * Step Four: Create a file named `.env`, in the client folder, add the following to it:

```js
 # Weather API keys

REACT_APP_WEATHER_API_KEY=// enter your Weather API Key

```

Then run `npm start` in the command line in the root folder. If successful, the console will confirm the PORT that it is running. You will need to visit `http://localhost:3000` to test the functionality. Note: the back-end server is set to run on `http://localhost:3001`. This application utilized `nodemon` to run two ports 
simulaneously.

## Build Tools
* Node.js v10.16.3
* Node packages (Server):
  * amadeus v3.3.0 (https://www.npmjs.com/package/amadeus)
  * axios v0.19.2 (https://www.npmjs.com/package/axios)
  * bycryptjs v2.4.3 (https://www.npmjs.com/package/@rbtdev/node-cmd-bcrypt)
  * body-parser v1.19.0 (https://www.npmjs.com/package/body-parser)
  * concurrently v5.1.0 (npmjs.com/package/concurrently)
  * connect-mongo v3.2.0 (npmjs.com/package/connect-mongo)
  * cors v.2.8.5 (https://www.npmjs.com/package/cors)
  * dotenv v8.2.0 (https://www.npmjs.com/package/dotenv)
  * express v4.17.1 (https://www.npmjs.com/package/express)
  * if-env v1.0.4 (https://www.npmjs.com/package/if-env)
  * moment v2.24.0 (https://www.npmjs.com/package/moment)
  * mongoose v5.9.3 (https://www.npmjs.com/package/mongoose)
  * morgan v1.9.1 (https://www.npmjs.com/package/morgan)
  * nodemon v2.0.2 (https://www.npmjs.com/package/nodemon)
  * passport v0.4.1 (https://www.npmjs.com/package/passport)
  * passport-local v1.0.0 (https://www.npmjs.com/package/passport-local)
  * path v0.12.7 (https://www.npmjs.com/package/path)

* Node packages (Client, unless already specified above):
  * @testing-library/jest-dom v4.2.4 (https://www.npmjs.com/package/@testing-library/jest-dom)
  * @testing-library/react v9.4.1 (https://www.npmjs.com/package/@testing-library/react)
  * @testing-library/user-event v7.2.1 (npmjs.com/package/@testing-library/user-event)
  * bootstrap v4.4.1 (https://www.npmjs.com/package/bootstrap)
  * react v16.13.0 (https://www.npmjs.com/package/react)
  * react-dates v21.8.0 (https://www.npmjs.com/package/react-dates)
  * react-dom v16.13.0 (https://www.npmjs.com/package/react-dom)
  * react-router-dom v5.1.2 (https://www.npmjs.com/package/react-router-dom)
  * react-spring v8.0.27 (https://www.npmjs.com/package/react-spring)
  * reactstrap v8.4.1 (https://www.npmjs.com/package/reactstrap)
  * toasted-notes v3.2.0 (https://www.npmjs.com/package/toasted-notes)

* MongoDB (MLab in Heroku) 
* Bootstrap 4.4.1
* Font Awesome
* CanvasJS (https://canvasjs.com/docs/charts/integration/react/)
* Unsplash for our beautiful background
* Deployed on Heroku

## Acknowledgements
* Thanks to all of the authors of Node.js packages - they are invaluable.

## License
* Licensed under the [MIT License](./LICENSE).
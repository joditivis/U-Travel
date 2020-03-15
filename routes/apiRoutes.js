require(`dotenv`).config();
var Amadeus = require("amadeus");
var axios = require("axios");

//AMADEUS_CLIENT_ID and AMADEUS_CLIENT_SECRET

module.exports = function(app) {
  var amadeus = new Amadeus({
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET
  });

  // Flight Inspiration Search
  app.get("/airport/:city", (req, res) => {
    amadeus.referenceData.locations
      .get({
        keyword: req.params.city,
        subType: Amadeus.location.any
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Flight Inspiration Search
  app.get("/flightDestinations/:city/:date/:nonstop?", (req, res) => {
    amadeus.shopping.flightDestinations
      .get({
        origin: req.params.city,
        departureDate: req.params.date,
        nonStop: req.params.nonstop || false
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Flight Cheapest Date Search
  app.get("/cheapestDate/:originCity/:destinationCity", (req, res) => {
    amadeus.shopping.flightDates
      .get({
        origin: req.params.originCity,
        destination: req.params.destinationCity
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Flight Low-fare Search
  app.get("/lowFare/:originCity/:destinationCity/:date", (req, res) => {
    amadeus.shopping.flightOffers
      .get({
        originLocationCode: req.params.originCity,
        destinationLocationCode: req.params.destinationCity,
        departureDate: req.params.date
      })
      .then(function(response) {
          console.log(response.data);
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Flight Offers Search
  app.get("/flights/:originCity/:destinationCity/:date/:adults/:nonstop?", (req, res) => {
    amadeus.shopping.flightOffers
      .get({
        origin: req.params.originCity,
        destination: req.params.destinationCity,
        departureDate: req.params.date,
        adults: req.params.adults,
        max: 50,
        nonStop: req.params.nonstop || false
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
        console.log(responseError)
      });
  });

  // Flight Choice Prediction
  app.get(
    "/flightPrediction/:originCity/:destinationCity/:date",
    (req, res) => {
      amadeus.shopping.flightOffers
        .get({
          origin: req.params.originCity,
          destination: req.params.destinationCity,
          departureDate: req.params.date
        })
        .then(function(response) {
          return amadeus.shopping.flightOffers.prediction.post(
            JSON.stringify(response.result)
          );
        })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(responseError) {
          console.log(responseError);
        });
    }
  );

  // Flight Checkin Links
  app.get("/checkin/:airline", (req, res) => {
    amadeus.referenceData.urls.checkinLinks
      .get({
        airlineCode: req.params.airline
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Get list of hotels by city code
  app.get("/hotels/:city", (req, res) => {
    amadeus.shopping.hotelOffers
      .get({
        cityCode: req.params.city
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Get list of offers for a specific hotel
  app.get("/hotelOffers/:hotelId", (req, res) => {
    amadeus.shopping.hotelOffersByHotel
      .get({
        hotelId: req.params.hotelId
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Confirm the availability of a specific offer id
  app.get("/hotelOfferAvailability/:hotelOffer", (req, res) => {
    amadeus.shopping
      .hotelOffer(req.params.hotelOffer)
      .get()
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

  // Hotel Ratings
  app.get("/hotelRating/:hotelId", (req, res) => {
    amadeus.eReputation.hotelSentiments
      .get({
        hotelIds: req.params.hotelId
      })
      .then(function(response) {
        res.send({ data: response.data });
      })
      .catch(function(responseError) {
        console.log(responseError.code);
      });
  });

    // Points of Interest   
    app.get("/pointsOfInterest/:latitude/:longitude", (req, res) => {
        amadeus.referenceData.locations.pointsOfInterest.get({
            latitude : req.params.latitude,
            longitude : req.params.longitude
        })
          .then(function(response) {
            res.send({ data: response.data });
          })
          .catch(function(responseError) {
            console.log(responseError.code);
          });
      });
};

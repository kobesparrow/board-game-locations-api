const express = require('express');
const cors = require ('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.locals.title = 'board-game-locations';
const mockLocation =
  { id: 24,
    title: 'example location',
    logo: 'http://logo.com',
    address: '100 South Street',
    website: 'http://www.examplelocation.com' }

app.locals.locations = [mockLocation];

app.get('api/v1/locations', (request, response) => {
  response.status(200).json(app.locals.locations)
});



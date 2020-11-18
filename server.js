import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

//Cache the city data
const dataEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const endpointResponse = await axios.get(dataEndpoint);
const cityData = endpointResponse.data;
console.log('- Retrieved city data');

const PORT = process.env.PORT || 2000;
const appServer = app.listen(PORT, () => {
    console.log('- Server listening on port', PORT);
});

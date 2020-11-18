import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

//Cache the city data
const dataEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const endpointResponse = await axios.get(dataEndpoint);
const cityData = endpointResponse.data;
console.log('- Retrieved city data');

//Search for the given string in the JSON data
app.get('/search', (req, res) => {
    try {
        const input = req.body['input'];

        if (!input) {
            res.status(400).send('Request failed: improper formatting');
        }
        else {
            const inputRegex = new RegExp(input.toLowerCase());

            //Find items that match the search input
            const results = cityData.filter(city => {
                const cityLowercase = city['city'].toLowerCase();
                return inputRegex.test(cityLowercase);
            })
            res.status(200).json(results);
        }
    }
    catch (err) {
        console.log('Error in search:', err);
    }
});

const PORT = process.env.PORT || 2000;
const appServer = app.listen(PORT, () => {
    console.log('- Server listening on port', PORT);
});

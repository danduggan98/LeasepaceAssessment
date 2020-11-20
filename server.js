import express from 'express';
import axios from 'axios';
import path from 'path';

const REACT_BUNDLE_PATH = path.resolve('./') + '/app/build';

const app = express();
app.use(express.static(REACT_BUNDLE_PATH));
app.use(express.json());

//Cache the city data
const dataEndpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29' +
                     '/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const endpointResponse = await axios.get(dataEndpoint);
const cityData = endpointResponse.data;
console.log('- Data retrieved');

//Search for the given string in the JSON data
app.post('/search', (req, res) => {
    try {
        const input = req.body['input'];
        
        if (typeof(input) === 'undefined') {
            res.status(400).json({ error: 'Request failed: improper formatting' });
        }
        else if (!input.length) {
            res.status(200).json([]);
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

//Serve static React files
app.get('/', (req, res) => {
    res.sendFile(`${REACT_BUNDLE_PATH}/index.html`);
});

const PORT = process.env.PORT || 5000;
const appServer = app.listen(PORT, () => {
    console.log('- Server listening on port', PORT);
});

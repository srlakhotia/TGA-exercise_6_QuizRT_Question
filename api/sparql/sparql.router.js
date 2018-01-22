const router = require('express').Router();
const wdk = require('wikidata-sdk');
const https = require('https');

const getJsonFromURL = function(url, callback) {
    https.get(url, (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];

        let error;
        if(statusCode !== 200) {
            error = new Error('request failed');
        }

        if(error) {
            console.error(error.message);
            res.resume();
            return;
        }

        res.setEncoding('utf-8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                callback(parsedData);
            } catch (e) {
                console.error(e);
            }
        });
    }).on('error', (e)=> {
        console.error(e);
    });
};

//get JSON from Sparql
/**
 * sparql as query parameter
 * localhost:3000/sparql/sparql-to-json?sparquery=<SELECT ....sparql query...>
 */
router.get('/sparql-to-json', (req, res) => {
    let params = req.query;

    const url = wdk.sparqlQuery(params.sparquery);
    getJsonFromURL(url, (jsonData) => {
        res.send(jsonData);
    });
});

module.exports = router;
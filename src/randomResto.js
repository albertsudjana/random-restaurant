'use strict';
const readline = require('readline');

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = #EnterAPIKeyHere;
const client = yelp.client(apiKey);
var status = false;
const searchRequest = {
 	location: ''
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForInput(callback){
rl.question('Enter ZIP Code? ', (answer) => {
  // TODO: Log the answer in a database
  searchRequest.location = answer;
  status = true;
  rl.close();
  callback(searchRequest);
});
}



function search(searchRequest){
	if (status == true){
		client.search(searchRequest).then(response => {
		const firstResult = response.jsonBody.businesses[Math.floor(Math.random() * 15) + 1];
  		console.log(firstResult.name);
	}).catch(e => {
  		console.log(e);
	});
	}
}

askForInput(search);

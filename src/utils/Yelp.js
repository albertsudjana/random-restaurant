const yelp = require('yelp-fusion');



// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'i7MVjdCQOjkDh6_A06Lvj6yA_fJ0bkCAc5ABL-MwSxEKFzMfDq-ZIvwHlwPZKIpekQoanWIDPZtlUxnq7sn_oyz2gG9KzhlbIcC9bcA8zW4p_EvD-yCLymWI916lW3Yx';
const client = yelp.client(apiKey);




	export const Yelp = (searchRequest) =>{
	client.search(searchRequest).then(response => {
	  const firstResult = response.jsonBody.businesses[0];
	  const prettyJson = JSON.stringify(firstResult, null, 4);
	  return prettyJson;
	}).catch(e => {
	  console.log(e);
	});
	}




const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			alias: 'address',
			demand: true,
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBu-jaFx6NEm5CkWoRLo3yDXxEroFw2Ofs&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find address')
	}
	var lat = response.data.results[0].geometry.location.lat;
	var lng = response.data.results[0].geometry.location.long;
	var weatherUrl = `https://api.darksky.net/forecast/1a4ca1c05d0c84f74ab52c4147abb827/${lat},${lng}?units=uk2`;
	console.log(response.data.results[0].formatted_address);
	return axios.get(weatherUrl);
}).then((response) => {
	var temp = response.data.currently.temperatur;
	var apparentTemp = response.data.currently.apparentTemperature;
	console.log(`Tempearture : ${temp}`)
	console.log(`Feels Like: ${apparentTemp}`)
}).catch((error) => {
	if (error.code === 'ENOTFOUND') {
		console.log('Unable to connect to API server')
	} else{
		console.log(error.message);
	}
})

// for promise based http requests
const axios = require('axios');

const getExchangeRate = async (from, to) => {
	try {
		const res = await axios.get(`http://api.fixer.io/latest?base=${from}`);
		const rate = res.data.rates[to];
		if (rate) {
			return rate;
		}

		throw Error();
	} catch (e) {
		throw new Error(`Unable to get exchange rate for ${from} to ${to}`);
	}

};

const getCountries = async (currencyCode) => {
	try {
		const res = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
		return res.data.map((country) => country.name);
	} catch (e) {
		throw new Error(`Unable to find countries that use ${currencyCode}`);
	}
};

const convertCurrency = async (from, to, amount) => {
	const rate = await getExchangeRate(from, to);
	const countries = await getCountries(to);
	const exchangedAmount = amount * rate;
	return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries ${countries.join(', ')}`;
};

convertCurrency('GBP', 'EUR', 1500).then((res) => {
	console.log(res);
}).catch((e) => {
	console.log(e.message);
});
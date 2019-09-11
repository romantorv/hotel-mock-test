const Joi = require('joi');
const axios = require('axios');
//
const sourceAPI = 'https://api.myjson.com/bins/gdmqa';
const resultSchema = require('../schemas/hotel.schema');
//

async function getHotelById(ids){
	try {
		const response = await axios.get(sourceAPI);
		const listOfIds = ids.split(',');
		let foundItems = response.data.filter( item => listOfIds.indexOf(item['Id']) >= 0 );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

async function getHotelByLocation(id){
	try {
		const response = await axios.get(sourceAPI);
		let foundItems = response.data.filter( item => item['DestinationId'].toString() === String(id) );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

function transformData(source){
	try {
		const transformedSource = source.map( item => ({
			id: item.Id,
			destination_id: item.DestinationId,
			name: item.Name,
			location: {
				lat: item.Latitude,
				lng: item.Longitude,
				address: item.Address,
				city: item.City,
				countryCode: item.Country,
				postal: item.PostalCode
			},
			description: item.Description,
			amenities: item.Facilities ? {
				general: item.Facilities
			} : null,
		}));
		
		//
		const listResultSchema = Joi.array().items( resultSchema );
		const { error, value } = Joi.validate(transformedSource, listResultSchema);
		//
		if ( error ) throw error;
		//
		return value;
	} catch (error) {
		console.log('source__a: transformData', error);
		return [];
	}
}

module.exports = {
	getHotelById,
	getHotelByLocation
};
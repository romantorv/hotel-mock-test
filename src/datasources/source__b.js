const Joi = require('joi');
const axios = require('axios');
//
const sourceAPI = 'https://api.myjson.com/bins/1fva3m';
const resultSchema = require('../schemas/hotel.schema');
//

async function getHotelById(ids){
	try {
		const response = await axios.get(sourceAPI);
		const listOfIds = ids.split(',');
		let foundItems = response.data.filter( item => listOfIds.indexOf(item['hotel_id']) >= 0 );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

async function getHotelByLocation(id){
	try {
		const response = await axios.get(sourceAPI);
		let foundItems = response.data.filter( item => item['destination_id'].toString() === String(id) );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

function transformData(source){
	try {
		const transformedSource = source.map( item => ({
			id: item.hotel_id,
			destination_id: item.destination_id,
			name: item.hotel_name,
			location: {
				address: item.location.address,
				country: item.location.country,
			},
			description: item.details ? [item.details] : null,
			amenities: item.amenities,
			images: item.images,
			booking_conditions: item.booking_conditions
		}));
		//
		const listResultSchema = Joi.array().items( resultSchema );
		const { error, value } = Joi.validate(transformedSource, listResultSchema);
		//
		if ( error ) throw error;
		//
		return value;
	} catch (error) {
		console.log('source__b: transformData', error);
		return [];
	}
}

module.exports = {
	getHotelById,
	getHotelByLocation
};
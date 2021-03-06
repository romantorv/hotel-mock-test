const Joi = require('joi');
const axios = require('axios');
//
const sourceAPI = 'https://api.myjson.com/bins/j6kzm"';
const resultSchema = require('../schemas/hotel.schema');
//
async function getHotels({ids=null, locationId=null}){
	try {
		const response = await axios.get(sourceAPI);
		//
		if ( !ids && !locationId ) return transformData(response.data);
		const listOfIds = ids ? ids.split(',') : [];
		// instead of using recursive loop for all params, 
		// we are using exact params name to optimizing the calculation
		// this method is applicable to simple query
		let foundItems = response.data.filter( item => {
			if ( listOfIds.length > 0 && locationId ){
				return item['destination'].toString() === String(locationId) && listOfIds.indexOf(item['id']) >= 0;
			} else if ( listOfIds.length > 0 && !locationId ){
				return listOfIds.indexOf(item['id']) >= 0;
			} else if ( listOfIds.length === 0 && locationId ){
				return item['destination'].toString() === String(locationId);
			} else {
				return false;
			}
		});
		return transformData(foundItems);
	} catch (error) {
		
	}
}

async function getHotelById(ids){
	try {
		const response = await axios.get(sourceAPI);
		const listOfIds = ids.split(',');
		let foundItems = response.data.filter( item => listOfIds.indexOf(item['id']) >= 0 );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

async function getHotelByLocation(id){
	try {
		const response = await axios.get(sourceAPI);
		let foundItems = response.data.filter( item => item['destination'].toString() === id.toString() );
		return transformData(foundItems);
	} catch ( error ){
		console.log(error);
		return [];
	}
}

function transformData(source){
	try {
		const transformedSource = source.map( item => ({
			id: item.id,
			destination_id: item.destination,
			name: item.name,
			location: {
				lat: item.lat,
				lng: item.lng,
				address: item.address
			},
			description: item.info ? [item.info] : null,
			amenities: item.amenities ? {
				general: item.amenities
			} : null,
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
		console.log('source__c: transformData', error);
		return [];
	}
}

module.exports = {
	getHotels,
	getHotelById,
	getHotelByLocation
};
const Joi = require('joi');
const axios = require('axios');
//
const sourceAPI = 'https://api.myjson.com/bins/gdmqa';
const resultSchema = require('../schemas/hotel.schema');
//

async function getHotels({ids=null, locationId=null}){
	try {
		const response = await axios.get(sourceAPI);
		//
		if ( !ids && !locationId ) return transformData(response.data);
		//
		const listOfIds = ids ? ids.split(',') : [];
		// instead of using recursive loop for all params, 
		// we are using exact params name to optimizing the calculation
		// this method is applicable to simple query
		let foundItems = response.data.filter( item => {
			if ( listOfIds.length > 0 && locationId ){
				return item['DestinationId'].toString() === String(locationId) && listOfIds.indexOf(item['Id']) >= 0;
			} else if ( listOfIds.length > 0 && !locationId ){
				return listOfIds.indexOf(item['Id']) >= 0;
			} else if ( listOfIds.length === 0 && locationId ){
				return item['DestinationId'].toString() === String(locationId);
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
			destination_id: item.DestinationId, // only primary datasource will contain key attributes
			name: item.Name, // only primary datasource will contain key attributes
			location: {
				lat: item.Latitude ? item.Latitude : null,
				lng: item.Longitude ? item.Longitude : null,
				address: item.Address ? item.Address : null,
				city: item.City ? item.City : null,
				countryCode: item.Country ? item.Country : null,
				postal: item.PostalCode ? item.PostalCode : null
			},
			description: item.Description ? [item.Description] : null,
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
	getHotels,
	getHotelById,
	getHotelByLocation
};
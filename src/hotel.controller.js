const datasources = require('./datasources');

function mergeData(sources = []){

	let mergedObject = sources.reduce( (result, source) => {
		source.map( hotel => {
			// initital the first records
			console.log('hotel', hotel);
			if ( typeof result[hotel.id] !== 'undefined' ) {
				result[hotel.id] = hotel;
			} else {
			// merging new content into existing hotel
				Object.keys(hotel).map( keyName => {
					if ( hotel[keyName] && keyName !== 'id' && keyName !== 'destination_id' ) { //????
						if ( Array.isArray(hotel[keyName]) ) {
							let newValue = [].concat(result[hotel.id][keyName], hotel[keyName]);
							result[hotel.id][keyName] = newValue;
						} else if ( typeof hotel[keyName] === 'object ') {
							let newValue = Object.assign(
								{},
								...result[hotel.id][keyName],
								...hotel[keyName]
							)
							result[hotel.id][keyName] = newValue;
						} else {
							result[hotel.id][keyName] = hotel[keyName];
						}
					}
				})
			}
			return result;
		});
	}, {});
	// return {
	// 	id,
	// 	destination_id,
	// 	name,
	// 	location,
	// 	description,
	// 	amenities,
	// 	images,
	// 	booking_conditions
	// }

	return Object.keys(mergedObject).reduce( (result, record) => {
		result.push( record );
		return result;
	}, []);
}

function getHotelById(ids){
	return [];
}

function getHotelByDestitation(destinationId){
	return [];
}

module.exports = {
	mergeData
}
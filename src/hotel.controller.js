const datasources = require('./datasources');

function isObject(target){
	return target !== null && typeof target ==='object' && !Array.isArray(target);
}

function objectMerge(target, ...sources){
	// verified if there is not compare source
	if ( typeof sources === 'undefined' || sources.length === 0) return target;
	//
	const currentSource = sources.shift();
	if ( isObject(target) && isObject(currentSource) ){
		Object.keys( currentSource ).map( keyName => {
			if ( Array.isArray(currentSource[keyName]) ){
				if ( !target[keyName]) target[keyName] = [];
				let joinedArray = target[keyName].concat( currentSource[keyName] );
				target[keyName] = [...new Set(joinedArray)];
			} else if ( isObject(currentSource[keyName]) ){
				if ( !target[keyName] ) Object.assign( target, { [keyName]: {} });
				objectMerge( target[keyName], currentSource[keyName] );
			} else if (currentSource[keyName] !== null ) {
				Object.assign(target, { [keyName]: currentSource[keyName] } );
			}
		})
	}
	return objectMerge(target, ...sources);
}

function mergeData(sources = []){
	let mergedObject = sources.reduce( (result, source) => {
		source.map( hotel => {
			// initital the first records			
			if ( typeof result[hotel.id] === 'undefined' ) {
				result[hotel.id] = hotel;
			} else {
			// merging new content into existing hotel
				let newResult = objectMerge({}, result[hotel.id], hotel);
				result[hotel.id] = newResult;
			}
		});
		return result;
	}, {});
	
	return Object.keys(mergedObject).reduce( (result, nameId) => {
		result.push( mergedObject[nameId] );
		return result;
	}, []);
}

async function getHotels({ids, locationId, pageNo=1, pageSize=10 }){
	const result = await Promise.all(
		datasources.schemas.map( async(sourceName) => datasources[sourceName].getHotels({ids, locationId}) )
	);

	return mergeData(result);
}

module.exports = {
	mergeData,
	getHotels,
}
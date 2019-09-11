const Joi = require('joi');

const schema = Joi.object({
	id: Joi.string().required(),
	destination_id: Joi.number().integer().required(),
	name: Joi.string().trim().required(),
	location: Joi.object().keys({
		lat: Joi.number().allow(null).default(null),
		lng: Joi.number().allow(null).default(null),
		address: Joi.string().trim().allow(null).default(null),
		city: Joi.string().optional().default(null),
		country: Joi.string().optional().default(null),
		countryCode: Joi.string().optional().length(2).default(null),
		postal: Joi.string().optional().default(null),
	}).required(),
	description: Joi.array()
		.items( Joi.string().trim() )
		.allow(null)
		.default(null),
	amenities: Joi.object()
		.pattern(/./, Joi.array().items( Joi.string().trim().lowercase() ))
		.allow(null)
		.default(null),
	images: Joi.object()
		.pattern(/./, Joi.array().items(
			Joi.object().keys({
				url: Joi.string(),
			})
			.unknown(true)
		))
		.default(null),
	booking_conditions: Joi.array().items( Joi.string().trim() ).default(null)
}).unknown(true);

module.exports = schema;
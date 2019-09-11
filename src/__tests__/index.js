const axios = require('../__mocks__/axios');

const datasources = [
	{
		url: "https://api.myjson.com/bins/gdmqa",
		schemaType: "",
		name: "Type 1",
	},
	{
		url: "https://api.myjson.com/bins/1fva3m",
		schemaType: "",
		name: "Type 2",
	},
	{
		url: "https://api.myjson.com/bins/j6kzm",
		schemaType: "",
		name: "Type 3",
	},
];
/*
describe('Checking all datasource in right format', () => {
	datasources.map( source => {
		describe(`${source.name} at ${source.url}`, () => {
			it('loading sucessfully source', () => {
				expect(response.status).toBe(200)
			})
			it('having right schema as configuration', () => {
				expect( joi.validate(response.data).error ).toBeNull();
			})
		})
	})
});

describe('Checking accepted request and tidy result schema', () => {
	it('GET method without param', () => {
		// let result = joi.validate( response.data, hotelListSchema);
		expect( result.error ).toBeNull();
		expect( response.data ).toHaveLength(2);
	});
	describe('GET method with hotel IDs param', () => {
		it ('request one Hotel ID', () => {
			// let result = joi.validate( response.data, hotelListSchema);
			expect( result.error ).toBeNull();
			expect(response.data).toHaveLength(1);
		});
		it ('request two Hotel IDs', () => {
			// let result = joi.validate( response.data, hotelListSchema);
			expect( result.error ).toBeNull();
			expect(response.data).toHaveLength(2);
		});
		it ('request a wrong Hotel ID', () => {
			// let result = joi.validate( response.data, hotelListSchema);
			expect( result.error ).toBeNull();
			expect(response.data).toHaveLength(0);
		});
	});
	describe('GET method with destination ID param', () => {
		it ('request a right destination ID', () => {
			// let result = joi.validate( response.data, hotelListSchema);
			expect( result.error ).toBeNull();
			expect(response.data).toHaveLength(2);
		});
		it ('request a wrong destination ID', () => {
			// let result = joi.validate( response.data, hotelListSchema);
			expect( result.error ).toBeNull();
			expect(response.data).toHaveLength(0);
		});
	});
	// describe('POST, PUT, DELETE methods are prohibited', () => {
		
	// })
});
*/
const hotelController = require('../hotel.controller');


describe('Checking hotel controller', () => {
	describe('Verifying merging function working', () => {
		it('return correct value from 2 normal sources', () => {
			const sampleData = [
				[{ 
					id: 'abc',
					destination_id: 1234,
					name: 'hotel abc',
					obj: {
						attr_a: 1234,
						attr_b: null,
					},
					nested: {
						attr_e: [ 
							"this is a string"
						]
					},
					text: null
				},
				{ 
					id: 'def',
					destination_id: 5678,
					name: "hotel def",
					obj: {
						attr_a: null,
						attr_b: "String",
					},
					text: [
						"some value 1"
					]
				}],
				[{ 
					id: 'abc',
					destination_id: 1234,
					name: 'hotel abc',
					obj: {
						attr_a: null,
						attr_b: "String",
					},
					nested: {
						attr_e: [ 
							"this is a string"
						]
					},
					text: null
				},
				{ 
					id: 'def',
					destination_id: 5678,
					name: "hotel def",
					obj: {
						attr_a: 1234,
						attr_b: null,
					},
					text: [
						"some value 2"
					]
				}],

			];

			const expectData = [
				{ 
					id: 'abc',
					destination: 1234,
					obj: {
						attr_a: 1234,
						attr_b: 5678,

					},
					nested: {
						attr_e: [ 
							"this is a string"
						]
					}
				},
				{ 
					id: 'def',
					destination: 5678,
					name: "ABC",
					obj: {
						attr_a: 7890,
						attr_c: "SG",
						attr_d: "Singapore",
					},
					text: [
						"some value"
					]
				}
			];

			const result = hotelController.mergeData(sampleData);
			expect( result ).toBeEqual( expectData );
		});
		it('return correct value from 2 sources with nullable attributes', () => {

		});
		it('return correct value from 3 sources with nullable attributes', () => {

		})
	})
})
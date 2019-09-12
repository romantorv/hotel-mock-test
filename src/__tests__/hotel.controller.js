const mockAxios = require('../__mocks__/axios');
const hotelController = require('../hotel.controller');

const input__a = [
	{
		"Id": "iJhz",
		"DestinationId": 5432,
		"Name": "Beach Villas Singapore",
		"Latitude": 1.264751,
		"Longitude": 103.824006,
		"Address": " 8 Sentosa Gateway, Beach Villas ",
		"City": "Singapore",
		"Country": "SG",
		"PostalCode": "098269",
		"Description": "  This 5 star hotel is located on the coastline of Singapore.",
		"Facilities": [
			"Pool",
			"BusinessCenter",
			"WiFi ",
			"DryCleaning",
			" Breakfast"
		]
	},
	{
		"Id": "SjyX",
		"DestinationId": 54321,
		"Name": "InterContinental Singapore Robertson Quay",
		"Latitude": null,
		"Longitude": null,
		"Address": " 1 Nanson Road",
		"City": "Singapore",
		"Country": "SG",
		"PostalCode": "238909",
		"Description": "Enjoy sophisticated waterfront living at the new InterContinental® Singapore Robertson Quay, luxury's preferred address nestled in the heart of Robertson Quay along the Singapore River, with the CBD just five minutes drive away. Magnifying the comforts of home, each of our 225 studios and suites features a host of thoughtful amenities that combine modernity with elegance, whilst maintaining functional practicality. The hotel also features a chic, luxurious Club InterContinental Lounge.",
		"Facilities": [
			"Pool",
			"WiFi ",
			"Aircon",
			"BusinessCenter",
			"BathTub",
			"Breakfast",
			"DryCleaning",
			"Bar"
		]
	}
];

const input__b = [
	{
		"hotel_id": "iJhz",
		"destination_id": 5432,
		"hotel_name": "Beach Villas Singapore",
		"location": {
			"address": "8 Sentosa Gateway, Beach Villas, 098269",
			"country": "Singapore"
		},
		"details": "Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station. Featuring sundecks and pool, garden or sea views, the plush 1- to 3-bedroom villas offer free Wi-Fi and flat-screens, as well as free-standing baths, minibars, and tea and coffeemaking facilities. Upgraded villas add private pools, fridges and microwaves; some have wine cellars. A 4-bedroom unit offers a kitchen and a living room. There's 24-hour room and butler service. Amenities include posh restaurant, plus an outdoor pool, a hot tub, and free parking.",
		"amenities": {
			"general": [
				"outdoor pool",
				"indoor pool",
				"business center",
				"childcare"
			],
			"room": [
				"tv",
				"coffee machine",
				"kettle",
				"hair dryer",
				"iron"
			]
		},
		"images": {
			"rooms": [
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg",
					"caption": "Double room"
				},
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/3.jpg",
					"caption": "Double room"
				}
			],
			"site": [
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/1.jpg",
					"caption": "Front"
				}
			]
		},
		"booking_conditions": [
			"All children are welcome. One child under 12 years stays free of charge when using existing beds. One child under 2 years stays free of charge in a child's cot/crib. One child under 4 years stays free of charge when using existing beds. One older child or adult is charged SGD 82.39 per person per night in an extra bed. The maximum number of children's cots/cribs in a room is 1. There is no capacity for extra beds in the room.",
			"Pets are not allowed.",
			"WiFi is available in all areas and is free of charge.",
			"Free private parking is possible on site (reservation is not needed).",
			"Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Payment before arrival via bank transfer is required. The property will contact you after you book to provide instructions. Please note that the full amount of the reservation is due before arrival. Resorts World Sentosa will send a confirmation with detailed payment information. After full payment is taken, the property's details, including the address and where to collect keys, will be emailed to you. Bag checks will be conducted prior to entry to Adventure Cove Waterpark. === Upon check-in, guests will be provided with complimentary Sentosa Pass (monorail) to enjoy unlimited transportation between Sentosa Island and Harbour Front (VivoCity). === Prepayment for non refundable bookings will be charged by RWS Call Centre. === All guests can enjoy complimentary parking during their stay, limited to one exit from the hotel per day. === Room reservation charges will be charged upon check-in. Credit card provided upon reservation is for guarantee purpose. === For reservations made with inclusive breakfast, please note that breakfast is applicable only for number of adults paid in the room rate. Any children or additional adults are charged separately for breakfast and are to paid directly to the hotel."
		]
	},
	{
		"hotel_id": "SjyX",
		"destination_id": 54321,
		"hotel_name": "InterContinental",
		"location": {
			"address": "1 Nanson Rd, Singapore 238909",
			"country": "Singapore"
		},
		"details": "InterContinental Singapore Robertson Quay is luxury's preferred address offering stylishly cosmopolitan riverside living for discerning travelers to Singapore. Prominently situated along the Singapore River, the 225-room inspiring luxury hotel is easily accessible to the Marina Bay Financial District, Central Business District, Orchard Road and Singapore Changi International Airport, all located a short drive away. The hotel features the latest in Club InterContinental design and service experience, and five dining options including Publico, an Italian landmark dining and entertainment destination by the waterfront.",
		"amenities": {
			"general": [
				"outdoor pool",
				"business center",
				"childcare",
				"parking",
				"bar",
				"dry cleaning",
				"wifi",
				"breakfast",
				"concierge"
			],
			"room": [
				"aircon",
				"minibar",
				"tv",
				"bathtub",
				"hair dryer"
			]
		},
		"images": {
			"rooms": [
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i93_m.jpg",
					"caption": "Double room"
				},
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i94_m.jpg",
					"caption": "Bathroom"
				}
			],
			"site": [
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i1_m.jpg",
					"caption": "Restaurant"
				},
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i2_m.jpg",
					"caption": "Hotel Exterior"
				},
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i5_m.jpg",
					"caption": "Entrance"
				},
				{
					"link": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i24_m.jpg",
					"caption": "Bar"
				}
			]
		},
		"booking_conditions": []
	}
];

const input__c = [
	{
		"id": "iJhz",
		"destination": 5432,
		"name": "Beach Villas Singapore",
		"lat": 1.264751,
		"lng": 103.824006,
		"address": "8 Sentosa Gateway, Beach Villas, 098269",
		"info": "Located at the western tip of Resorts World Sentosa, guests at the Beach Villas are guaranteed privacy while they enjoy spectacular views of glittering waters. Guests will find themselves in paradise with this series of exquisite tropical sanctuaries, making it the perfect setting for an idyllic retreat. Within each villa, guests will discover living areas and bedrooms that open out to mini gardens, private timber sundecks and verandahs elegantly framing either lush greenery or an expanse of sea. Guests are assured of a superior slumber with goose feather pillows and luxe mattresses paired with 400 thread count Egyptian cotton bed linen, tastefully paired with a full complement of luxurious in-room amenities and bathrooms boasting rain showers and free-standing tubs coupled with an exclusive array of ESPA amenities and toiletries. Guests also get to enjoy complimentary day access to the facilities at Asia’s flagship spa – the world-renowned ESPA.",
		"amenities": [
			"Aircon",
			"Tv",
			"Coffee machine",
			"Kettle",
			"Hair dryer",
			"Iron",
			"Tub"
		],
		"images": {
			"rooms": [
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg",
					"description": "Double room"
				},
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/4.jpg",
					"description": "Bathroom"
				}
			],
			"amenities": [
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg",
					"description": "RWS"
				},
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/6.jpg",
					"description": "Sentosa Gateway"
				}
			]
		}
	},
	{
		"id": "SjyX",
		"destination": 54321,
		"name": "Hilton Tokyo Shinjuku",
		"lat": 35.6926,
		"lng": 139.690965,
		"address": null,
		"info": null,
		"amenities": null,
		"images": {
			"rooms": [
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i10_m.jpg",
					"description": "Suite"
				},
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i11_m.jpg",
					"description": "Suite - Living room"
				}
			],
			"amenities": [
				{
					"url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i57_m.jpg",
					"description": "Bar"
				}
			]
		}
	}
]

const output = [{"amenities": {"general": ["pool", "businesscenter", "wifi", "drycleaning", "breakfast", "outdoor pool", "indoor pool", "business center", "childcare", "aircon", "tv", "coffee machine", "kettle", "hair dryer", "iron", "tub"], "room": ["tv", "coffee machine", "kettle", "hair dryer", "iron"]}, "booking_conditions": ["All children are welcome. One child under 12 years stays free of charge when using existing beds. One child under 2 years stays free of charge in a child's cot/crib. One child under 4 years stays free of charge when using existing beds. One older child or adult is charged SGD 82.39 per person per night in an extra bed. The maximum number of children's cots/cribs in a room is 1. There is no capacity for extra beds in the room.", "Pets are not allowed.", "WiFi is available in all areas and is free of charge.", "Free private parking is possible on site (reservation is not needed).", "Guests are required to show a photo identification and credit card upon check-in. Please note that all Special Requests are subject to availability and additional charges may apply. Payment before arrival via bank transfer is required. The property will contact you after you book to provide instructions. Please note that the full amount of the reservation is due before arrival. Resorts World Sentosa will send a confirmation with detailed payment information. After full payment is taken, the property's details, including the address and where to collect keys, will be emailed to you. Bag checks will be conducted prior to entry to Adventure Cove Waterpark. === Upon check-in, guests will be provided with complimentary Sentosa Pass (monorail) to enjoy unlimited transportation between Sentosa Island and Harbour Front (VivoCity). === Prepayment for non refundable bookings will be charged by RWS Call Centre. === All guests can enjoy complimentary parking during their stay, limited to one exit from the hotel per day. === Room reservation charges will be charged upon check-in. Credit card provided upon reservation is for guarantee purpose. === For reservations made with inclusive breakfast, please note that breakfast is applicable only for number of adults paid in the room rate. Any children or additional adults are charged separately for breakfast and are to paid directly to the hotel."], "description": ["This 5 star hotel is located on the coastline of Singapore.", "Surrounded by tropical gardens, these upscale villas in elegant Colonial-style buildings are part of the Resorts World Sentosa complex and a 2-minute walk from the Waterfront train station. Featuring sundecks and pool, garden or sea views, the plush 1- to 3-bedroom villas offer free Wi-Fi and flat-screens, as well as free-standing baths, minibars, and tea and coffeemaking facilities. Upgraded villas add private pools, fridges and microwaves; some have wine cellars. A 4-bedroom unit offers a kitchen and a living room. There's 24-hour room and butler service. Amenities include posh restaurant, plus an outdoor pool, a hot tub, and free parking.", "Located at the western tip of Resorts World Sentosa, guests at the Beach Villas are guaranteed privacy while they enjoy spectacular views of glittering waters. Guests will find themselves in paradise with this series of exquisite tropical sanctuaries, making it the perfect setting for an idyllic retreat. Within each villa, guests will discover living areas and bedrooms that open out to mini gardens, private timber sundecks and verandahs elegantly framing either lush greenery or an expanse of sea. Guests are assured of a superior slumber with goose feather pillows and luxe mattresses paired with 400 thread count Egyptian cotton bed linen, tastefully paired with a full complement of luxurious in-room amenities and bathrooms boasting rain showers and free-standing tubs coupled with an exclusive array of ESPA amenities and toiletries. Guests also get to enjoy complimentary day access to the facilities at Asia’s flagship spa – the world-renowned ESPA."], "destination_id": 5432, "id": "iJhz", "images": {"amenities": [{"description": "RWS", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/0.jpg"}, {"description": "Sentosa Gateway", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/6.jpg"}], "rooms": [{"description": "Double room", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg"}, {"description": "Double room", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/3.jpg"}, {"description": "Double room", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/2.jpg"}, {"description": "Bathroom", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/4.jpg"}], "site": [{"description": "Front", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/0qZF/1.jpg"}]}, "location": {"address": "8 Sentosa Gateway, Beach Villas, 098269", "city": "Singapore", "country": "Singapore", "countryCode": "SG", "lat": 1.264751, "lng": 103.824006, "postal": "098269"}, "name": "Beach Villas Singapore"}, {"amenities": {"general": ["pool", "wifi", "aircon", "businesscenter", "bathtub", "breakfast", "drycleaning", "bar", "outdoor pool", "business center", "childcare", "parking", "dry cleaning", "concierge"], "room": ["aircon", "minibar", "tv", "bathtub", "hair dryer"]}, "booking_conditions": [], "description": ["Enjoy sophisticated waterfront living at the new InterContinental® Singapore Robertson Quay, luxury's preferred address nestled in the heart of Robertson Quay along the Singapore River, with the CBD just five minutes drive away. Magnifying the comforts of home, each of our 225 studios and suites features a host of thoughtful amenities that combine modernity with elegance, whilst maintaining functional practicality. The hotel also features a chic, luxurious Club InterContinental Lounge.", "InterContinental Singapore Robertson Quay is luxury's preferred address offering stylishly cosmopolitan riverside living for discerning travelers to Singapore. Prominently situated along the Singapore River, the 225-room inspiring luxury hotel is easily accessible to the Marina Bay Financial District, Central Business District, Orchard Road and Singapore Changi International Airport, all located a short drive away. The hotel features the latest in Club InterContinental design and service experience, and five dining options including Publico, an Italian landmark dining and entertainment destination by the waterfront."], "destination_id": 54321, "id": "SjyX", "images": {"amenities": [{"description": "Bar", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i57_m.jpg"}], "rooms": [{"description": "Double room", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i93_m.jpg"}, {"description": "Bathroom", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i94_m.jpg"}, {"description": "Suite", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i10_m.jpg"}, {"description": "Suite - Living room", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/YwAr/i11_m.jpg"}], "site": [{"description": "Restaurant", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i1_m.jpg"}, {"description": "Hotel Exterior", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i2_m.jpg"}, {"description": "Entrance", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i5_m.jpg"}, {"description": "Bar", "url": "https://d2ey9sqrvkqdfs.cloudfront.net/Sjym/i24_m.jpg"}]}, "location": {"address": "1 Nanson Rd, Singapore 238909", "city": "Singapore", "country": "Singapore", "countryCode": "SG", "lat": 35.6926, "lng": 139.690965, "postal": "238909"}, "name": "Hilton Tokyo Shinjuku"}];

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
							"this is a string 1"
						]
					},
					text: "String"
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
							"this is a string 2"
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
					destination_id: 1234,
					name: 'hotel abc',
					obj: {
						attr_a: 1234,
						attr_b: "String",
					},
					nested: {
						attr_e: [
							"this is a string 1",
							"this is a string 2"
						]
					},
					text: "String"
				},
				{
					id: 'def',
					destination_id: 5678,
					name: "hotel def",
					obj: {
						attr_a: 1234,
						attr_b: "String",
					},
					text: [
						"some value 1",
						"some value 2"
					]
				}
			];

			const result = hotelController.mergeData(sampleData);
			expect(result).toEqual(expectData);
		});
		it('return correct value from 2 sources with different value attributes - NOT COMPLETE', () => {

		});
		it('return correct value from 3 sources with different value attributes - NOT COMPLETE', () => {
			//
		})
	});

	describe('Verifying getHotels from multiple sources', () => {
		beforeEach(() => {
			mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: input__a }));
			mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: input__b }));
			mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: input__c }));
		});
		it('single valid hotel id and no location', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz'
			});
			expect(result).toHaveLength(1);
			expect(result).toEqual(
				expect.arrayContaining([output[0]])
			)
		});
		it('multiple valid hotel id and no location', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz,SjyX'
			});
			expect(result).toHaveLength(2);
			expect(result).toEqual(
				expect.arrayContaining([output[0]])
			)
			expect(result).toEqual(
				expect.arrayContaining([output[1]])
			)
		});
		it('invalid hotel id and no location', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz__'
			});
			expect(result).toHaveLength(0);
		});
		it('no hotel id and valid location', async () => {
			const result = await hotelController.getHotels({
				locationId: 5432
			});
			expect(result).toHaveLength(1);
			expect(result).toEqual(
				expect.arrayContaining( [output[0]] )
			)
		});
		it('single valid hotel id and valid location', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz',
				locationId: 5432
			});
			expect(result).toHaveLength(1);
			expect(result).toEqual(
				expect.arrayContaining([output[0]])
			)
		});
		it('single valid hotel id and valid location - no record', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz',
				locationId: 54321
			});
			expect(result).toHaveLength(0);
		});
		it('multiple valid hotel id and valid location', async () => {
			const result = await hotelController.getHotels({
				ids: 'iJhz,SjyX',
				locationId: 54321
			});
			expect(result).toHaveLength(1);
			expect(result).toEqual(
				expect.arrayContaining([output[1]])
			)
		});
	});
})
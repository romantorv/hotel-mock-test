const express = require('express');
const router = express.Router();

const controller = require('./hotel.controller');

function response401(req,res){
	res.status(401).send();
}

router.get('/', async (req, res) => {
	let result = await controller.getHotels({
		ids: typeof req.query.id !== 'undefined' ? req.query.id : null,
		locationId: typeof req.query.location !== 'undefined' ? req.query.location : null,
	})
	res.status(200).json({
		totalRecords: result.length, // a fake number for total result
		pageSize: 10, // responsed page size
		pageNo: 1, // responsed page number
		data: result
	});
});
router.post('/', response401);
router.delete('/', response401);
router.put('/', response401);

module.exports = router;
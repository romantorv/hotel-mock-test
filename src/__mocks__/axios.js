const axios = {
	get: jest.fn(() => {
		return Promise.resolve({ data: {} });
	})
};

module.exports = axios;
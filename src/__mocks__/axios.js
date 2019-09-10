const axios = {
	get: jest.fn(() => {
		return Promise.resolve({ data: {} });
	})
};

export default axios;
import userController from '../controllers/userController';

const payLoadValidation = (payloadParam) => {

	return (val, options, next) => {
		const payload = options.context.payload;

		for (let value of payloadParam) {
			if(!(value in payload)) {
				let err = new Error('Invalid type');
				next(err, val);
			}
		}
		next(null, val);
	};

};

const customMiddleware = () => {
	console.log("customMiddleware enetered");
	next(null, val);
};

const routes = {
	config: [
		// Add a route to serve static assets (CSS, JS, IMG)
		{method: 'GET', path: '/{param*}',	handler: {directory: { path: 'build'}}},

		// Add main app route
		{method: 'GET', path: '/', config: {handler: {view: 'Default'}}},

		{method: 'GET', path: '/users', config: {validate: {params: customMiddleware}, handler: userController.getUsers}},

		{method: 'POST', path: '/user', config: {validate: {params: payLoadValidation(['name', 'password'])}, handler: userController.addUser}},

		{method: 'GET', path: '/user/{userID}', config: {handler: userController.getUserById}},

		{method: 'DELETE', path: '/user/{userID}', config: {handler: userController.deleteUser}},

		{method: 'PATCH', path: '/user/{userID}', config: {handler: userController.updateUser}}
	]
};

export default routes;
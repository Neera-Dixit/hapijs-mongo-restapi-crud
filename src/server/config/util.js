
const util = {
	sendResponse : (response, err, data) => {

		if (err) return response(err).code(500);

		if(!data){
			return response("NOT FOUND").code(404);
		}
		
		response(data).code(200);
	}
}

export default util;
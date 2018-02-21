import MongoSails from 'sails-mongo';
import dbConfig from './database';
import User from '../models/user';
const dogwaterOptions = {
	connections: {
    	mongoDB: dbConfig.mongodb
  	},
  	adapters: {
    	mongodb: MongoSails
  	},
  	models: [User]
};

export default dogwaterOptions;
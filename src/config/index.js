const knexConfig = process.env.NODE_ENV || 'live';

const config = require( './environment' );
const database = require( './knexfile' )[knexConfig];

module.exports = Object.assign( {
	db : database
}, config );

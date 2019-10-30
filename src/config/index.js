const environment      = require( './environment' );
const fbServiceAccount = require( './firebase' );
const knexfile         = require( './knexfile' );

module.exports = {
	knexfile,
	fbServiceAccount,
	env : environment,
};

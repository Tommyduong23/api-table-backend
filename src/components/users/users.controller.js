const express = require( 'express' );

const Service   = require( './users.service' );
const Validator = require( './users.validator' );

// const Authenticate = appRequire( 'web/helpers/authenticate' );
// const Authorize   = appRequire( 'web/helpers/authorize' );

const router = express.Router();

router.post(
	'/user',

	// Authenticate,
	// Authorize,
	Validator.createUser,

	( req, res, next ) => {

		Service.createUser()
			.then( data => res.status( 200 ).send( data ) )
			.catch( err => next( err ) );
	}
);

module.exports = router;

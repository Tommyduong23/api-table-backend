/* eslint-disable import/prefer-default-export */
const defaultOptions = {
	credentials    : true,
	exposedHeaders : ['Content-Disposition'],
};

module.exports = ( req, callback ) => {
	const origin = req.get( 'origin' );

	const userAgent         = req.get( 'User-Agent' );
	const allowedUserAgents = [];

	if ( userAgent && allowedUserAgents.find( a => userAgent.match( a ) ) ) {

		callback( null, {
			origin : true,
			...defaultOptions
		} );

		return;

	}

	if ( origin ) {

		callback( null, {
			origin : ( reqOrigin, cb ) => {
				// cb( null, true );

				const whitelist = [/localhost/];

				const allowedOrigin = whitelist.find( ( url ) => {
					if ( typeof url === 'string' ) {
						return url === reqOrigin;
					}

					return url.test( reqOrigin );
				} );

				if ( allowedOrigin ) {
					cb( null, true );

					return;
				}

				cb( new Error( `Domain not allowed by CORS policy. Domain: ${origin}` ) );
			},
			...defaultOptions
		} );

		return;

	}

	// eslint-disable-next-line consistent-return
	return callback( null, {
		origin : false,
		...defaultOptions,
	} );
};

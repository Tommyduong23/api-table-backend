const validateConfig = ( config ) => {
	let valid = true;

	const keys = Object.keys( config );

	keys.forEach( ( key ) => {
		const value = config[key];

		if ( typeof value === 'object' ) {
			valid = validateConfig( value );
		}

		if ( value === undefined ) {
			console.warn( `${key} is not defined` );
			valid = false;
		}

	} );

	return valid;

};

module.exports = validateConfig;

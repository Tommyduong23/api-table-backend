const app = require( './app' );

const { env } = appRequire( 'config' );

// Set up server settings

const start = () => new Promise( ( resolve ) => {

	const port = env.PORT || 4000;

	app.listen( port, () => {
		console.log( `Listening at port ${port}` );
		resolve();
	} );

} );

module.exports = {
	start
};

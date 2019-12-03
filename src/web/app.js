const express    = require( 'express' );
const Celebrate  = require( 'celebrate' );

const errorHandler = require( './helpers/errorHandler' );
const routeLoader  = require( './helpers/routeLoader' );
const CorsOptions = require( './helpers/corsOptions' );

const app = express();

app.use( cors( CorsOptions ) );

// parse all of our requests into JSON
app.use( express.json() );

// has to do with library extension. Must be false
app.use( express.urlencoded( {
	extended : false,
} ) );

// Add Routes
routeLoader( 'components', app );

// Add Error handler
app.use( Celebrate.errors() );

app.use( ( err, req, res, next ) => {
	errorHandler( err );

	// Programming errors
	if ( !err.isOperational ) {
		return res.status( 500 ).send( err );
	}

	res.status( err.status ).send( err );
} );

process.on( 'unhandledRejection', ( reason ) => {
	throw reason;
} );

process.on( 'uncaughtException', ( err ) => {
	errorHandler( err );

	if ( !err.isOperational ) {
		process.exit( 1 );
	}

} );

module.exports = app;

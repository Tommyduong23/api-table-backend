require( 'apprequire' )( __dirname );
require( 'dotenv' ).config();

const { Model } = require( 'objection' );

const { env }     = require( './src/config' );
const validateEnv = require( './src/config/validateEnv' );
const server      = require( './src/web/server' );
const knex        = require( './src/helpers/knex' );

// check config to not have any undefined env variables
if ( validateEnv( env ) ) {
	process.exit( 1 );
}

// setup db
Model.knex( knex );

// Start server
server.start();

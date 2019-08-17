require( 'apprequire' )( __dirname );
require( 'dotenv' ).config();

const Knex = require( 'knex' );
const { Model } = require( 'objection' );

const config = require( './src/config' );
const server = require( './src/web/server' );

const validateConfig = require( './src/config/validateConfig' );

// check config to not have any undefined env variables
if ( validateConfig( config ) ) {
	process.exit( 1 );
}

// setup db
const knex = Knex( config.db );
Model.knex( knex );

// Start server
server.start();

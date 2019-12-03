require( 'dotenv' ).config( { path : './src/config/private/.env' } );
require( 'apprequire' )( __dirname );

const { Model } = require( 'objection' );

const { env }     = require( './config' );
const validateEnv = require( './config/validateEnv' );
const server      = require( './web/server' );

// const knex        = require( './src/helpers/knex' );

// check config to not have any undefined env variables
// if ( !validateEnv( env ) ) {
// 	throw new Error( 'env variables not defined' );
// }

// setup db
// Model.knex( knex );

// Start server
server.start();

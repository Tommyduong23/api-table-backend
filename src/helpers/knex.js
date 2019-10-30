const Knex = require( 'knex' );

const { knexfile } = appRequire( 'config' );

const knex = Knex( knexfile );

module.exports = knex;

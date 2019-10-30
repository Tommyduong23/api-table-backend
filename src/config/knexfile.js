const { knexSnakeCaseMappers } = require( 'objection' );
const { knex } = require( './environment' );

const config = {
	client     : 'pg',
	connection : {
		host     : knex.HOST_PSQL,
		database : knex.NAME_PSQL,
		user     : knex.USER_PSQL,
		password : knex.PASSWORD_PSQL,
	},
	pool : {
		min : 2,
		max : 10
	},
	migrations : {
		directory : `${__dirname}/src/database/migrations`,
	},
	seeds : {
		directory : `${__dirname}/src/database/seeds`
	},
	...knexSnakeCaseMappers()
};

module.exports = config;

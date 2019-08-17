require( 'dotenv' ).config( { path : './private/.env' } );

const { knexSnakeCaseMappers } = require( 'objection' );

const config = {
	testing : {
		client     : 'pg',
		connection : {
			host     : '127.0.0.1',
			database : '', // Fill in testing db name
			user     : 'postgres',
			password : 'start',
		},
		pool : {
			min : 2,
			max : 10
		},
		migrations : {
			directory : `${__dirname}/src/database/migrations`
		},
		seeds : {
			directory : `${__dirname}/src/database/seeds`
		},
		...knexSnakeCaseMappers()
	},

	live : { // This will either be dev or prod depending on the .env
		client     : 'pg',
		connection : {
			host     : process.env.HOST_PSQL,
			database : process.env.NAME_PSQL,
			user     : process.env.USER_PSQL,
			password : process.env.PASSWORD_PSQL,
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
	},
};

module.exports = config;

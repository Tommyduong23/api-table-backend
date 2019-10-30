require( 'dotenv' ).config( { path : './private/.env' } );

module.exports = {
	web : {
		PORT     : process.env.PORT,
		PROTOCOL : process.env.PROTOCOL,
		DOMAIN   : process.env.DOMAIN,
		NODE_ENV : process.env.NODE_ENV,
	},
	knex : {
		HOST_PSQL     : process.env.HOST_PSQL,
		DATABASE_PSQL : process.env.DATABASE_PSQL,
		USER_PSQL     : process.env.USER_PSQL,
		PASSWORD_PSQL : process.env.PASSWORD_PSQL,
	},
	firebase : {
		DATABASE_URL : process.env.DATABASE_URL
	}
};

const Bluebird = require( 'bluebird' );

const Repo = require( './users.repo' );

module.exports = class UserService {
	static createUser( user ) {

		Repo.createUser( user );

	}
};

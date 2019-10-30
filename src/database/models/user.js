const { Model, RelationMappings } = require( 'objection' );
const Base = require( './base' );

const { UserNotFoundError } = appRequire( 'components/users/users.errors' );

module.exports = class User extends Base {
	static get tableName() {
		return 'users';
	}

	static get idColumn() {
		return 'userKey';
	}

	static createNotFoundError() {
		return new UserNotFoundError( 404, 'User not found' );
	}

	static get relationMappings() {
		return {};
	}
};

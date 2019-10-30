const objection           = require( 'objection' );
const { DBErrors }        = require( 'objection-db-errors' );
const objectionSoftDelete = require( 'objection-softdelete' );

objectionSoftDelete.register( objection );

module.exports = class Base extends DBErrors( objection.Model ) {
	static get softDelete() {
		return true;
	}
};

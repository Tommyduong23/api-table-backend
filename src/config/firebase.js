const admin = require( 'firebase-admin' );
const environment = require( './environment' );

const ServiceAccount = appRequire( '../private/service-account.json' );

const serviceAccount = {
	credential  : admin.credential.cert( ServiceAccount ),
	databaseURL : environment.firebase.DATABASE_URL,
};

module.exports = serviceAccount;

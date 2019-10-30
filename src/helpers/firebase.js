const admin = require( 'firebase-admin' );

const { fbServiceAccount } = appRequire( 'config' );

admin.initializeApp( fbServiceAccount );

module.export = admin;

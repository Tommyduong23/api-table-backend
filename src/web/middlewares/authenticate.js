const admin = appRequire( 'helpers/firebase' );
const AppError = appRequire( 'helpers/appError' );

const authenticate = async ( req, res, next ) => {
	const authToken = req.get( 'Auth-Token' ) || '';

	const uid = await admin
		.auth()
		.verifyIdToken( authToken )
		.then( authUser => authUser.uid );

	if ( typeof uid !== 'string' ) {
		return next();
	}

	const authUser = await admin
		.database()
		.ref()
		.child( 'users' )
		.child( uid )
		.once( 'value' )
		.then( snapshot => snapshot.val() );

	if ( !authUser ) {
		return next( new AppError( 400, 'Bad token.' ) );
	}

	res.locals.caller = { ...authUser, uid };
	return next();
};

module.exports = authenticate;

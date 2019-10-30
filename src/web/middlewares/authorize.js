const AppError = appRequire( 'helpers/appError' );

module.exports = function ( requiredPermissionLevel ) {
	return function ( req, res, next ) {
		const { caller } = res.locals;
		const requiredMinimumLevel = typeof requiredPermissionLevel === 'function'
			? requiredPermissionLevel( req, res, next )
			: requiredPermissionLevel;

		if ( caller.permissionLevel < requiredMinimumLevel ) {
			return next( new AppError( 401, 'User lacks required permission level to make this request' ) );
		}

		return next();

	};
};

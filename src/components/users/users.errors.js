const AppError = appRequire( 'helpers/appError' );

class UserNotFoundError extends AppError {}

module.exports = {
	UserNotFoundError
};

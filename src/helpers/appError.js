module.exports = class AppError extends Error {
	constructor( status, message ) {
		super( message );

		this.name = this.constructor.name;
		this.msg = message;
		this.status = status;
		this.isOperational = true;
	}
};

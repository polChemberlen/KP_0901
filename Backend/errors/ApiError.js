class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message) {
        return new ApiError(400, message);
    }

    static unAuthorized(message) {
        return new ApiError(401, message || 'Пользователь не авторизован');
    }

    static forbidden(message) {
        return new ApiError(403, message || 'Доступ запрещен');
    }

    static notFound(message) {
        return new ApiError(404, message);
    }

    static conflict(message) {
        return new ApiError(409, message);
    }

    static internal(message) {
        return new ApiError(500, message || 'Непредвиденная ошибка сервера');
    }
}

export default ApiError;
import ApiError from "../errors/ApiError.js";

export default function (role) {
    return function (req, res, next) {

        try {
            if (!req.user) {
                return next(ApiError.unAuthorized());
            }

            if (req.user.role !== role) {
                return next(ApiError.forbidden());
            }

            next();

        } catch (e) {
            return next(ApiError.internal());
        }
    }
}
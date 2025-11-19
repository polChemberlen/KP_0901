import TokenService from "../services/tokenService.js";
import ApiError from "../errors/ApiError.js";

export default function (req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return next(ApiError.unAuthorized());
        }

        const token = authHeader.split(' ')[1];
        const userData = TokenService.validateToken(token);

        if (!userData) {
            return next(ApiError.unAuthorized());
        }

        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.internal());
    }
}
import jwt from 'jsonwebtoken';

class TokenService {
    generateToken(payload) {
        const token = jwt.sign(
            payload, 
            process.env.JWT_SECRET_KEY, 
            {expiresIn: '24h'}
        );
        
        return token;
    }

    validateToken (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET_KEY);
        } catch (e) {
            return null;
        }
    }
}

export default new TokenService();
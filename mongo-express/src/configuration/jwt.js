import ExJwt from "express-jwt";

export function handleErrorJwt(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            message: err.message
        });
    }
}

export function getToken() {
    return ExJwt({
        secret: "secret_key"
    })
};
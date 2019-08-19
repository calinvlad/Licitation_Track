module.exports = {
    PORT: process.env.PORT || 8000,
    authentication: {
        jwtSecret: process.env.jWT_SECRET || 'secret',
        expiresIn: process.env.expiresIn || 60 * 60 * 24, // 24 hours
        forgotExpiresIn: process.env.forgotExpiresIn || 60 * 5 // 5 minutes
    }
}
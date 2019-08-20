const db = require('../../../db/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../../../config')

function jwtSignUser (user) {
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: config.authentication.expiresIn
    })
}

module.exports = {
    async index(req, res, next) {
        let user;
        await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((data) => {
                user = data
                bcrypt.compare(req.body.password, data.password)
                    .then(async (data) => {
                        if(data){
                            delete user.dataValues.password
                            req.user = user
                            next()
                        }
                        else {
                            res.status(400).send({success: false, message: 'Your email or password is incorrect'})
                        }
                    })
                    .catch(err => {
                        res.status(400).send({success: false, message: 'Your email or password is incorrect', err: err})
                    })
            })
            .catch(err => {
                res.status(400).send({success: false, message: 'Your email or password is incorrect', err: err})
            })
    },
    async last(req, res, next) {
        const user = req.user
        console.log(user)
        res.status(200).send({success: true, data: user, token: jwtSignUser(user.toJSON())})
    }
}
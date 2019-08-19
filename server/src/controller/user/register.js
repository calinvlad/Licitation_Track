const db = require('../../../db/models')
const moment = require('moment')
const now = moment().format('YYYY/MM/DD HH:mm:ss')

module.exports = {
    async index(req, res) {
        await db.User.create({
            email: req.body.email,
            password: req.body.password,
            created: now,
            updated: now
        })
            .then(async (user) => {
                res.status(200).send({success: true, data: user})
            })
            .catch(err => {
                res.status(500).send({success: false, message: 'Register has failed', err: err})
            })
    }
}
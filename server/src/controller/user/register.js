const db = require('../../../db/models')
const moment = require('moment')
const now = moment().format('YYYY/MM/DD HH:mm:ss')
const config = require('../../../config')

module.exports = {
    async index(req, res) {
        await db.User.create({
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
            status: config.user_status.active,
            created: now,
            updated: now,
            last_login: now
        })
            .then(async (user) => {
                res.status(200).send({success: true, data: user})
            })
            .catch(err => {
                res.status(500).send({success: false, message: 'Register has failed', err: err})
            })
    }
}
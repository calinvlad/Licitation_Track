const db = require('../../../db/models')

module.exports = {
    async register(req, res, next) {
        await db.User.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            pass: req.body.pass
        })
            .then(async (user) => {
                res.status(200).send({success: true, data: user})
            })
            .catch(err => {
                res.status(500).send({success: false, message: 'Register has failed', err: err})
            })
    }
}
const user_ctrl_register = require('./controller/user/register')
const user_ctrl_login = require('./controller/user/login')

const watch_ctrl_create = require('./controller/watch/create')

module.exports = app => {

    app.post('/auth/register', user_ctrl_register.index)
    app.post('/auth/login', user_ctrl_login.index)

    app.post('/watch', watch_ctrl_create.index)

}
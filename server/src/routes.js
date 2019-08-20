const user_ctrl_register = require('./controller/user/register')
const user_ctrl_login = require('./controller/user/login')

module.exports = app => {

    app.post('/auth/register', user_ctrl_register.index)
    app.post('/auth/login', user_ctrl_login.index, user_ctrl_login.last)

}
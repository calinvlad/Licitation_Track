module.exports = app => {

    app.get('/', (req, res) => {
        return res.status(200).send({message: 'HOLA'})
    })

}
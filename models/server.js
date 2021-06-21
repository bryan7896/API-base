const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT

        this.middleweres()
        this.routes()
    }
    middleweres(){
        this.app.use( express.static('public'))
        this.app.use( express.json() )
        this.app.use(cors())
    }

    routes(){
        this.app.use('/api/users', require('../routes/user'))
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo en el puerto ${this.port}`)
        })
    }
}

module.exports = Server
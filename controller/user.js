const { response } = require('express')

const usersGet = (req, res = response)=>{
    const {q, name, apikey, page, limit} = req.query
    res.json({
        msg: 'get Api - controller',
        q, name, apikey, page, limit
    })
}
const usersPut = (req, res = response)=>{
    const id = req.params.id
    res.json({
        msg: 'put Api - controller',
        id
    })
}
const usersPost = (req, res = response)=>{
    const {name, age} = req.body
    res.json({
        msg: 'Post Api - controller',
        name,
        age
    })
}
const usersDelate = (req, res = response)=>{
    res.json({
        msg: 'Delate Api - controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelate
}
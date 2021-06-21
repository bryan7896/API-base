const { Router } = require('express')
const { usersGet, usersPost, usersPut, usersDelate } = require('../controller/user')
const router = Router()

router.get('/', usersGet)

router.put('/:id', usersPut)
router.post('/', usersPost)
router.delete('/', usersDelate)

module.exports = router
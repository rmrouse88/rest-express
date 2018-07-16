const express = require('express')

const helloRouter = express.Router()

helloRouter.get('/', (req,res,next) => {
    res.json({ok: 'what the fuck'})
    
})

export default helloRouter
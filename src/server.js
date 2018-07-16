const express = require('express')

import { restRouter } from './api/restRouter'


const app = express()

app.use('/api', restRouter) // mounting the restRouter 

export default app
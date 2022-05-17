const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const router = express.Router()

router.post("/", (res, req, next) => {
    console.log(res.body)
    next()
})

app.use(router)

app.listen(5000)
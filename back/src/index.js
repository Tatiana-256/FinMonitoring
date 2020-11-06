const express = require('express')
const app = express()
const port = 3050

app.get('/', (req, res) => {
    res.send('Hell0 World')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


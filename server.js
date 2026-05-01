const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
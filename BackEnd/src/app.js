const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: 'https://code-review-ruddy.vercel.app', // Replace with your frontend URL
  credentials: true // If using cookies, authentication headers, etc.
}));


app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app
const express = require('express')
const cors = require('cors')

const product_routes = require('./routes/products.js')  
const connectDB = require('./db/connect.js')
const port = process.env.PORT || 3000

const app = express()
app.use(cors())

app.use('/api', product_routes)

app.get('/', (req, res) => {
  res.send('This is the home page')
})




// startng the Database
connectDB()

// starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

const express =  require('express')
const router = express.Router()
const {getThedata, getTheTestdata} = require('../controllers/products.js') 

router.route('/').get(getThedata)
router.route('/testing').get(getTheTestdata)

module.exports = router




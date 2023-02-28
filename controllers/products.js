const Bank = require('../models/Banks.js');

const getThedata = async (req, res) => { 
  const data =  await Bank.find(req.query)
  console.log(req.query);
  res.json({data});
}

const getTheTestdata =  (req, res) => { 
  res.status(200).json({msg:"This is the test data"})
}


module.exports = {getTheTestdata, getThedata}
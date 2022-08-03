const router = require("express").Router();

const Phone = require('../models/Phone.model');

//  /phones	GET	Show all phones
router.get('/phones', (req, res, next) => {
    Phone.find()
      .then(allPhones => res.json(allPhones))
      .catch(err => res.json(err));
  });

//  GET /api/phones/:phoneId -  Retrieves a specific phone by id
router.get('/phones/:phoneId', (req, res, next) => {
    const { phoneId } = req.params;
   
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }
})

module.exports = router;
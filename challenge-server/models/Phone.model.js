const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const PhoneSchema = new Schema({
  id: Number,
  name: String,
  manufacturer: String,
  description: String,
  color: String,
  price: String,
  imageFileName: String,
  screen: String,
  processor: String,
  ram: Number
});
 
module.exports = model('Phone', PhoneSchema);

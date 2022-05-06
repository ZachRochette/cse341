const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema and model
const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Name field is required']
  },
  lastName: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required']
  },
  favoriteColor: {
    type: String,
    required: [true, 'Favorite color field is required']
  },
  birthday: {
    type: Date,
    required: [true, 'Birthday field is required']
  }
});

const ContactsModel = mongoose.model('contacts', ContactSchema);

module.exports = ContactsModel;

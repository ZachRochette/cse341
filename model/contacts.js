const mongoose = require('mongoose');

// create schema and model
const ContactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  favoriteColor: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  favoriteFood: {
    type: String,
    required: true
  },
  placeOfBirth: {
    type: String,
    required: true
  },
  shoeSize: {
    type: String,
    required: true
  }
});

const ContactsModel = mongoose.model('contacts', ContactSchema);

module.exports = ContactsModel;

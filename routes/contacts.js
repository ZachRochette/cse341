const routes = require('express').Router();
const ContactsModel = require('../model/contacts');

// GET ALL CONTACTS
routes.get('/', (req, res) => {
  ContactsModel.find({}, (err, result) => {
    res.status(200).json(result);
  });
});

// GET ONE CONTACT
routes.get('/:id', (req, res) => {
  ContactsModel.find({ _id: req.params.id }, (err, result) => {
    res.status(200).json(result);
  });
});

// CREATE NEW CONTACT
routes.post('/', (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
    favoriteFood: req.body.favoriteFood,
    placeOfBirth: req.body.placeOfBirth,
    shoeSize: req.body.shoeSize
  };
  ContactsModel.create(contact, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

// UPDATE CONTACT
routes.put('/:id', (req, res) => {
  ContactsModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    res.json(result);
  });
});

// DELETE CONTACT
routes.delete('/:id', (req, res) => {
  ContactsModel.deleteOne({ _id: req.params.id }, (err, result) => {
    res.json(result);
  });
});

module.exports = routes;

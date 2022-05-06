const routes = require('express').Router();
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const ContactsModel = require('../model/contacts');

// GET ALL CONTACTS
routes.get('/', (req, res) => {
  const results = connect.getCollection().find();

  results.toArray().then((documents) => {
    res.status(200).json(documents);
    console.log('Returned All Contacts');
  });
});

// GET ONE CONTACT
routes.get('/:id', (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const results = connect.getCollection().find({ _id: contactId });

  results.toArray().then((documents) => {
    res.status(200).json(documents[0]);
    console.log(`Returned Contact ${req.params.id}`);
  });
});

// CREATE NEW CONTACT
routes.post('/', (req, res, next) => {
  ContactsModel.create(req.body)
    .then(function (contactModel) {
      res.send(contactModel);
    })
    .catch(next);
});

// UPDATE CONTACT
routes.put('/:id', (req, res) => {
  ContactsModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    ContactsModel.findOne({ _id: req.params.id }).then(function (contactModel) {
      res.send(contactModel);
    });
  });
});

// DELETE CONTACT
routes.delete('/:id', (req, res) => {
  ContactsModel.findByIdAndRemove({ _id: req.params.id }).then(function (contactModel) {
    res.send(contactModel);
  });
});

module.exports = routes;

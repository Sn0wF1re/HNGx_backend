const express = require('express');
const router = express.Router();

const Person = require('../models/person');

// create person
router.post('/', async (req, res, next) => {
  try {
    const newPerson = await Person.create({
      name: req.body.name,
    });
    res.json(newPerson);
  } catch (err) {
    next(err);
  }
});

// retrieve all persons
router.get('/', async (req, res, next) => {
  try {
    const persons = await Person.find();
    res.json(persons);
  } catch (err) {
    next(err);
  }
});

// retrieve details of one person
router.get('/:id', async (req, res, next) => {
  try {
    const personId = req.params.id;
    const person = await Person.findById(personId);

    if (!person) {
      res.status(404).json({ message: 'Person not found!' });
    }
    res.json(person)
  } catch (err) {
    next(err);
  }
});

// update details of an existing person
router.put('/:id', async (req, res, next) => {
  try {
    const personId = req.params.id;
    const update = {
      name: req.body.name,
    };
    const person = await Person.findByIdAndUpdate(
      personId,
      update,
      {new: true}
    );

    if (!person) {
      res.status(404).json({ message: 'Person not found!' })
    }
    res.json(person);

  } catch (err) {
    next(err);
  }
});

// Delete one person
router.delete('/:id', async (req, res, next) => {
  try {
    const personId = req.params.id;
    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      res.status(404).json({ message: 'Person not found!' });
    }
    res.json(deletedPerson);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

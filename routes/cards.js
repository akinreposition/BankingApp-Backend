const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Card = require('../models/Card');

//  @route      GET api/cards
//  @desc       Get all users account details
//  @access     Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById({ user: req.user.id })
    const cards = await Card.find(user).sort({
      date: -1,
    });
    res.json(cards);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route      POST api/cards
//  @desc       Add new account
//  @access     Private
router.post(
  '/',
  [
    auth,
    [
      check('bankName', 'Bank Name is required').not().isEmpty(),
      check('cardName', 'Card Name is required!').not().isEmpty(),
      check('cardNumber', 'Card Number is required!').not().isEmpty(),
  ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { bankName, cardName, cardNumber, expirationDate, type } =
      req.body;

    try {
      const newCard = new Card({
        bankName,
        cardName,
        cardNumber,
        type,
        expirationDate,
        user: req.user.id,
      });

      const card = await newCard.save();

      res.json(card);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//  @route      PUT api/accounts/:id
//  @desc       Update account
//  @access     Private
router.put('/:id', (req, res) => {
  res.send("Update card");
});

//  @route      DELETE api/accounts/:id
//  @desc       Delete account
//  @access     Private
router.delete('/', (req, res) => {
  res.send("Delete card");
});

module.exports = router;

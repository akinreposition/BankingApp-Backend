const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Cards = require("../models/Cards");

//  @route      GET api/cards
//  @desc       Get all users account details
//  @access     Private
router.get("/", auth, async (req, res) => {
  try {
    const cards = await Cards.find({ user: req.user.id }).sort({
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
  "/",
  [
    auth,
    [
      check("bankName", "Bank Name is required").not().isEmpty(),
      check("cardName", "Card Name is required!").not().isEmpty(),
      check("cardNumber", "Card Number is required!").not().isEmpty(),
      check("ccv", "ccv Number is required!").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { bankName, cardName, cardNumber, ccv, expirationDate, type } =
      req.body;

    try {
      const newCard = new Card({
        bankName,
        cardName,
        cardNumber,
        ccv,
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
router.put("/:id", (req, res) => {
  res.send("Update card");
});

//  @route      DELETE api/accounts/:id
//  @desc       Delete account
//  @access     Private
router.delete("/", (req, res) => {
  res.send("Delete card");
});

module.exports = router;
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Account = require("../models/Account");

//  @route      GET api/accounts
//  @desc       Get all users account details
//  @access     Private
router.get("/", auth, async (req, res) => {
  try {
    const accounts = await Account.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(accounts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//  @route      POST api/accounts
//  @desc       Add new account
//  @access     Private
router.post(
  "/",
  [
    auth,
    [
      check("bankName", "Bank is required").not().isEmpty(),
      check("accountName", "Account Name is required!").not().isEmpty(),
      check("accountNumber", "Account Number is required!").not().isEmpty(),
      check("phone", "Phone Number is required!").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { bankName, accountName, accountNumber, phone, email, type } =
      req.body;

    try {
      const newAccount = new Account({
        bankName,
        accountName,
        accountNumber,
        phone,
        type,
        email,
        user: req.user.id,
      });

      const account = await newAccount.save();

      res.json(account);
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
  res.send("Update account");
});

//  @route      DELETE api/accounts/:id
//  @desc       Delete account
//  @access     Private
router.delete("/", (req, res) => {
  res.send("Delete account");
});

module.exports = router;

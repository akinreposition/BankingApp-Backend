const express = require('express');
const router = express.Router();

//  @route      GET api/accounts
//  @desc       Get all users account details
//  @access     Private
router.get('/', (req, res) => {
    res.send('Get all accounts details');
});

//  @route      POST api/accounts
//  @desc       Add new account
//  @access     Private
router.post('/', (req, res) => {
    res.send('Add account');
});

//  @route      PUT api/accounts/:id
//  @desc       Update account
//  @access     Private
router.put('/:id', (req, res) => {
    res.send('Update account');
});

//  @route      DELETE api/accounts/:id
//  @desc       Delete account
//  @access     Private
router.delete('/', (req, res) => {
    res.send('Delete account');
});

module.exports = router; 
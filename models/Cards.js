const mongoose = require("mongoose");

const CardSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  bankName: {
    type: String,
    required: true,
  },
  cardName: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "Master",
  },
  ccv: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("cards", CardSchema);

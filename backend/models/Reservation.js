const mongoose = require('../db');

const ReservationSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  adults: {
    type: Number,
    required: true,
  },
  childrens: {
    type: Number,
    required: true,
  },
  specialNotes: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});


const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
const db = require('../models');

module.exports = {
  get: (req, res, next) => {
    const roomId = req.params.id;
    db.Booking.find({ roomId })
      .exec()
      .then((data) => {
        if (!data || !data.length) {
          next();
        } else {
          // console.log('sample items', data[0].bookings);
          res.json(data);
        }
      })
      .catch(next);
  },
  post: (req, res, next) => {
    const newBooking = new db.Booking(req.body);
    newBooking.save((err) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.status(200).send(newBooking);
    });
  },

  put: (req, res) => {
    db.Booking.findByIdAndUpdate(req.params.bookingId, req.body, { new: true }, (err, booking) => {
      if (err) {
        return res.status(500).send(err);
      }
      return res.send(booking);
    });
  },
  delete: (req, res) => {
    db.Booking.findByIdAndRemove(req.params.bookingId, (err, booking) => {
      if (err) return res.status(500).send(err);
      const response = {
        message: 'successfully deleted',
      };
      return res.status(200).send(response);
    });
  },

  create(req, res) {},
};

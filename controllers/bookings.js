const db = require('../models');

module.exports = {
  get: (req, res, next) => {
    const roomId = req.params.id;
    db.Booking.find({ roomId: roomId })
      .exec()
      .then(data => {
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
    newBooking.save(err => {  
        if (err) return res.status(500).send(err);
        return res.status(200).send(newTodoObj);
    });
  },


  create: function(req, res) {},
};

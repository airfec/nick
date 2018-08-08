const express = require('express');
const ctrl = require('./../controllers');

const router = express.Router();

router.get('/rooms/:id/bookings', ctrl.bookings.get);

router.post('/rooms/:id/bookings', ctrl.bookings.post);

router.put('/rooms/:id/bookings', ctrl.bookings.put);

module.exports = router;

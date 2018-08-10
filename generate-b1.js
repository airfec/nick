const fs = require('fs');
const faker = require('faker');

const createBookingData = () => {
  const roomID = faker.random.number({
    min: 1,
    max: 10000000,
  });
  const checkIn = faker.date.between('2018-07-24', '2019-12-31');
  const duration = faker.random.number({
    min: 1,
    max: 31,
  });
  const dataItem = `${checkIn},${duration},${roomID}`;
  return dataItem;
};

const writeBookingsCSV = () => {
  const out = fs.createWriteStream('./bookings1.csv');
  for (let i = 0; i < 25000000; i++) {
    out.write(`${createBookingData()}\n`);
  }
};

writeBookingsCSV();

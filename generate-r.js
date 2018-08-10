const fs = require('fs');
const faker = require('faker');

const createRoomData = () => {
  const price = faker.random.number({
    min: 50,
    max: 400,
  });
  const serviceFee = faker.random.number({
    min: 15,
    max: 50,
  });

  const cleaningFee = faker.random.number({
    min: 5,
    max: 35,
  });

  const minimumStay = faker.random.number({
    max: 3,
  });

  const maxAdults = faker.random.number({
    min: 2,
    max: 8,
  });

  const maxChildren = faker.random.number({
    min: 2,
    max: 8,
  });

  const maxInfants = faker.random.number({
    min: 2,
    max: 4,
  });

  const taxes = faker.random.number({
    min: 5,
    max: 40,
  });

  const num1 = faker.random.number({
    max: 5,
  });

  const num2 = faker.random.number({
    max: 7,
  });

  const funFactTitles = [
    'This house is haunted.',
    "This was Elon Musk's first apartment.",
    'This place has a great view of the park.',
    'This place has amazing air conditioning.',
    'This is a very popular booking.',
    'People are talking about this place.',
  ];
  const funFacts = [
    'It’s been viewed 500+ times in the past week.',
    `It’s been booked ${taxes} times in the past year.`,
    'The owner takes pictures of all the tenants.',
    'This is a top rated listing.',
    'The owner is a gentleman and a scholar.',
    'The owner is well-liked in his community.',
    "It's rated in the top 5% for hospitality.",
    "It's rated in the top 5% for cleanliness.",
  ];

  const funFactTitle = funFactTitles[num1];
  const funFact = funFacts[num2];

  // Shape of dataItem object
  //     {
  //       roomId: Number
  //       numberOfBookings: Number
  //       bookings:  Array [{checkIn: Date, duration: Number}]
  //       price: Number
  //       cleaningFee: Number
  //       serviceFee: Number
  //       minimumStay: Number
  //       maxAdults: Number,
  //       maxChildren: Number,
  //       maxInfants: Number,
  //       taxes: Number
  //   }

  const dataItem = `${price},${serviceFee},${cleaningFee},${minimumStay},${maxAdults},${maxChildren},${maxInfants},${funFactTitle},${funFact}`;
  return dataItem;
};

const writeRoomCSV = () => {
  const out = fs.createWriteStream('./rooms.csv');
  for (let i = 0; i < 10000000; i++) {
    out.write(`${createRoomData()}\n`);
  }
};

writeRoomCSV();

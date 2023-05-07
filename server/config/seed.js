const db = require('./connection');
const parkData = require('../models/seed/parkData');
const { Park, User } = require('../models');

db.once('open', async () => {
  await User.deleteMany();
  await Park.deleteMany();


  await Park.insertMany(parkData);
  console.table(parkData);
  console.log("Parks seeded");
  process.exit(0);
})



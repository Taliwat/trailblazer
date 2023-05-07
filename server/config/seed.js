const db = require('./connection');
const parkData = require('../models/seed/parkData');
const { Park } = require('../models');

db.once('open', async () => {
  await Park.deleteMany();

  await Park.insertMany(parkData);
  console.table(parkData);
  console.log("Parks seeded");
  process.exit(0);
})



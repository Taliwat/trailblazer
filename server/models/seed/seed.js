const db = require('../../config/connection');
const { Park, User } = require('..');
const data = require('./parkData.json')
  
db.once('open', async () => {
  console.log('Connected to DB...Seeding Parks')
  await User.deleteMany({});
  await Park.deleteMany({});
  const parks = await Park.insertMany(data);
  console.log(parks);
  console.log("Parks seeded");
  process.exit(0);
})



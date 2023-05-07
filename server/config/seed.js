const db = require('./connection');
const states = require('states-us')
const abbrev = states.default.map((x) => x.abbreviation);
const { Park, User } = require('../models');

async function siteData(CODE) {
  const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${CODE[0]}&api_key=a87d5fKBWTnIgwEPzboHNuChJvzEYt0hWbIahnCj`)
  const data = await res.json();
  console.log(data);
  const allData = []
  allData.push(data.data.map((x) => x));
  console.log(allData);
  process.exit();
};

siteData(abbrev);

// db.once('open', async () => {
//   await User.deleteMany();
//   await Park.deleteMany();

//   console.log("Parks seeded");
//   process.exit(0);
// })



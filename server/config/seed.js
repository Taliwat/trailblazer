const db = require('./connection');
const states = require('states-us')
const abbrev = states.default.map((x) => x.abbreviation);
const { Park, User } = require('../models');
let count = 0;
const allData = []

async function siteData(CODE) {
  for ( let i = 0; i < CODE.length; i++ ){
    console.log(`--------------------------------------------------------`);
    console.log(`--Fetching Park data for ${CODE[i]}.`);
    const res = await fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${CODE[i]}&api_key=a87d5fKBWTnIgwEPzboHNuChJvzEYt0hWbIahnCj`)
    const data = await res.json();
    console.log(`--Total sites found: ${data.total}`)
    count = parseInt(data.total) + count
    data.data.map((x) => {
      console.log(x.fullName);
      allData.push(x);
    });
    console.log(`*Total sites accumulated: ${count}.*`);

  }
  console.log(allData.length);
  process.exit();
};

siteData(abbrev);

// db.once('open', async () => {
//   await User.deleteMany();
//   await Park.deleteMany();

//   console.log("Parks seeded");
//   process.exit(0);
// })



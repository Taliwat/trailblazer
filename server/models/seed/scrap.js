const states = require('states-us')
const abbrev = states.default.map((x) => x.abbreviation);
let count = 0;
const allData = []
const fs = require('fs');


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
      const states = x.states.split(',');
      allData.push(
        {
          NPS_id: x.id,
          url: x.url,
          fullName: x.fullName,
          parkCode: x.parkCode,
          latitude: x.latitude,
          longitude: x.longitude,
          states: states,
          designation: x.designation
        }
      );
    });
    console.log(`*Total sites accumulated: ${count}.*`);
  }
  console.table(allData);
  console.log(`^^\\\/\\\/<><>BA`);
  const sites = JSON.stringify(allData);
  fs.writeFile('parkData.json', sites, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('Data written to file successfully.');
    }
  });
  
}

siteData(abbrev);

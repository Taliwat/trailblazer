const parks = [
  {
    states: "KY",
    parkCode: "abli",
    designation: "National Historical Park",
    fullName: "Abraham Lincoln Birthplace National Historical Park",
    URL: "https://www.nps.gov/abli/index.htm",
    name: "Abraham Lincoln Birthplace"
  },
  {
    states: "MA",
    parkCode: "adam",
    designation: "National Historical Park",
    fullName: "Adams National Historical Park",
    URL: "https://www.nps.gov/adam/index.htm",
    name: "Adams"
  },
  {
    states: "PA",
    parkCode: "alpo",
    designation: "National Historic Site",
    fullName: "Allegheny Portage Railroad National Historic Site",
    URL: "https://www.nps.gov/alpo/index.htm",
    name: "Allegheny Portage Railroad"
  },
  {
    states: "AK",
    parkCode: "anch",
    designation: "",
    fullName: "Alaska Public Lands",
    URL: "https://www.nps.gov/anch/index.htm",
    name: "Alaska Public Lands"
  },
  {
    states: "GA",
    parkCode: "ande",
    designation: "National Historic Site",
    fullName: "Andersonville National Historic Site",
    URL: "https://www.nps.gov/ande/index.htm",
    name: "Andersonville"
  },
  {
    states: "VA",
    parkCode: "apco",
    designation: "National Historical Park",
    fullName: "Appomattox Court House National Historical Park",
    URL: "https://www.nps.gov/apco/index.htm",
    name: "Appomattox Court House"
  },
  {
    states: "WI",
    parkCode: "apis",
    designation: "National Lakeshore",
    fullName: "Apostle Islands National Lakeshore",
    URL: "https://www.nps.gov/apis/index.htm",
    name: "Apostle Islands"
  },
  {
    states: "UT",
    parkCode: "arch",
    designation: "National Park",
    fullName: "Arches National Park",
    URL: "https://www.nps.gov/arch/index.htm",
    name: "Arches"
  },
  {
    states: "MD,VA",
    parkCode: "asis",
    designation: "National Seashore",
    fullName: "Assateague Island National Seashore",
    URL: "https://www.nps.gov/asis/index.htm",
    name: "Assateague Island"
  },
  {
    states: "SD",
    parkCode: "badl",
    designation: "National Park",
    fullName: "Badlands National Park",
    URL: "https://www.nps.gov/badl/index.htm",
    name: "Badlands"
  },
  {
    states: "AK",
    parkCode: "bela",
    designation: "National Preserve",
    fullName: "Bering Land Bridge National Preserve",
    URL: "https://www.nps.gov/bela/index.htm",
    name: "Bering Land Bridge"
  },
  {
    states: "DC",
    parkCode: "bepa",
    designation: "National Monument",
    fullName: "Belmont-Paul Women's Equality National Monument",
    URL: "https://www.nps.gov/bepa/index.htm",
    name: "Belmont-Paul Women's Equality"
  },
  {
    states: "FL",
    parkCode: "bisc",
    designation: "National Park",
    fullName: "Biscayne National Park",
    URL: "https://www.nps.gov/bisc/index.htm",
    name: "Biscayne"
  },
  {
    states: "MA",
    parkCode: "boaf",
    designation: "National Historic Site",
    fullName: "Boston African American National Historic Site",
    URL: "https://www.nps.gov/boaf/index.htm",
    name: "Boston African American"
  },
  {
    states: "MA",
    parkCode: "bost",
    designation: "National Historical Park",
    fullName: "Boston National Historical Park",
    URL: "https://www.nps.gov/bost/index.htm",
    name: "Boston"
  },
  {
    states: "CA",
    parkCode: "cabr",
    designation: "National Monument",
    fullName: "Cabrillo National Monument",
    URL: "https://www.nps.gov/cabr/index.htm",
    name: "Cabrillo"
  },
  {
    states: "MA",
    parkCode: "caco",
    designation: "National Seashore",
    fullName: "Cape Cod National Seashore",
    URL: "https://www.nps.gov/caco/index.htm",
    name: "Cape Cod"
  },
  {
    states: "UT",
    parkCode: "cany",
    designation: "National Park",
    fullName: "Canyonlands National Park",
    URL: "https://www.nps.gov/cany/index.htm",
    name: "Canyonlands"
  },
  {
    states: "LA",
    parkCode: "cari",
    designation: "National Historical Park",
    fullName: "Cane River Creole National Historical Park",
    URL: "https://www.nps.gov/cari/index.htm",
    name: "Cane River Creole"
  },
  {
    states: "FL",
    parkCode: "casa",
    designation: "National Monument",
    fullName: "Castillo de San Marcos National Monument",
    URL: "https://www.nps.gov/casa/index.htm",
    name: "Castillo de San Marcos"
  },
  {
    states: "TX",
    parkCode: "cham",
    designation: "National Memorial",
    fullName: "Chamizal National Memorial",
    URL: "https://www.nps.gov/cham/index.htm",
    name: "Chamizal"
  },
  {
    states: "SC",
    parkCode: "chpi",
    designation: "National Historic Site",
    fullName: "Charles Pinckney National Historic Site",
    URL: "https://www.nps.gov/chpi/index.htm",
    name: "Charles Pinckney"
  },
  {
    states: "AR",
    parkCode: "chsc",
    designation: "National Historic Site",
    fullName: "Little Rock Central High School National Historic Site",
    URL: "https://www.nps.gov/chsc/index.htm",
    name: "Little Rock Central High School"
  },
  {
    states: "SC",
    parkCode: "cong",
    designation: "National Park",
    fullName: "Congaree National Park",
    URL: "https://www.nps.gov/cong/index.htm",
    name: "Congaree"
  },
  {
    states: "OH",
    parkCode: "cuva",
    designation: "National Park",
    fullName: "Cuyahoga Valley National Park",
    URL: "https://www.nps.gov/cuva/index.htm",
    name: "Cuyahoga Valley"
  },
  {
    states: "CA,NV",
    parkCode: "deva",
    designation: "National Park",
    fullName: "Death Valley National Park",
    URL: "https://www.nps.gov/deva/index.htm",
    name: "Death Valley"
  },
  {
    states: "PA",
    parkCode: "flni",
    designation: "National Memorial",
    fullName: "Flight 93 National Memorial",
    URL: "https://www.nps.gov/flni/index.htm",
    name: "Flight 93"
  },
  {
    states: "MD",
    parkCode: "fomc",
    designation: "National Monument and Historic Shrine",
    fullName: "Fort McHenry National Monument and Historic Shrine",
    URL: "https://www.nps.gov/fomc/index.htm",
    name: "Fort McHenry"
  },
  {
    states: "KS",
    parkCode: "fosc",
    designation: "National Historic Site",
    fullName: "Fort Scott National Historic Site",
    URL: "https://www.nps.gov/fosc/index.htm",
    name: "Fort Scott"
  },
  {
    states: "AR,OK",
    parkCode: "fosm",
    designation: "National Historic Site",
    fullName: "Fort Smith National Historic Site",
    URL: "https://www.nps.gov/fosm/index.htm",
    name: "Fort Smith"
  },
  {
    states: "NY",
    parkCode: "fost",
    designation: "National Monument",
    fullName: "Fort Stanwix National Monument",
    URL: "https://www.nps.gov/fost/index.htm",
    name: "Fort Stanwix"
  },
  {
    states: "SC",
    parkCode: "fosu",
    designation: "National Historical Park",
    fullName: "Fort Sumter and Fort Moultrie National Historical Park",
    URL: "https://www.nps.gov/fosu/index.htm",
    name: "Fort Sumter and Fort Moultrie"
  },
  {
    states: "PA",
    parkCode: "frhi",
    designation: "National Historic Site",
    fullName: "Friendship Hill National Historic Site",
    URL: "https://www.nps.gov/frhi/index.htm",
    name: "Friendship Hill"
  },
  {
    states: "DE,PA",
    parkCode: "frst",
    designation: "National Historical Park",
    fullName: "First State National Historical Park",
    URL: "https://www.nps.gov/frst/index.htm",
    name: "First State"
  },
  {
    states: "AZ,UT",
    parkCode: "glca",
    designation: "National Recreation Area",
    fullName: "Glen Canyon National Recreation Area",
    URL: "https://www.nps.gov/glca/index.htm",
    name: "Glen Canyon"
  },
  {
    states: "AZ",
    parkCode: "grca",
    designation: "National Park",
    fullName: "Grand Canyon National Park",
    URL: "https://www.nps.gov/grca/index.htm",
    name: "Grand Canyon"
  },
  {
    states: "MO",
    parkCode: "gwca",
    designation: "National Monument",
    fullName: "George Washington Carver National Monument",
    URL: "https://www.nps.gov/gwca/index.htm",
    name: "George Washington Carver"
  },
  {
    states: "HI",
    parkCode: "hale",
    designation: "National Park",
    fullName: "Haleakalā National Park",
    URL: "https://www.nps.gov/hale/index.htm",
    name: "Haleakalā"
  },
  {
    states: "NE",
    parkCode: "home",
    designation: "National Historical Park",
    fullName: "Homestead National Historical Park",
    URL: "https://www.nps.gov/home/index.htm",
    name: "Homestead"
  },
  {
    states: "MO",
    parkCode: "hstr",
    designation: "National Historic Site",
    fullName: "Harry S Truman National Historic Site",
    URL: "https://www.nps.gov/hstr/index.htm",
    name: "Harry S Truman"
  },
  {
    states: "PA",
    parkCode: "inde",
    designation: "National Historical Park",
    fullName: "Independence National Historical Park",
    URL: "https://www.nps.gov/inde/index.htm",
    name: "Independence"
  },
  {
    states: "MO",
    parkCode: "jeff",
    designation: "National Park",
    fullName: "Gateway Arch National Park",
    URL: "https://www.nps.gov/jeff/index.htm",
    name: "Gateway Arch"
  },
  {
    states: "PA",
    parkCode: "jofl",
    designation: "National Memorial",
    fullName: "Johnstown Flood National Memorial",
    URL: "https://www.nps.gov/jofl/index.htm",
    name: "Johnstown Flood"
  },
  {
    states: "AK",
    parkCode: "katm",
    designation: "National Park & Preserve",
    fullName: "Katmai National Park & Preserve",
    URL: "https://www.nps.gov/katm/index.htm",
    name: "Katmai"
  },
  {
    states: "GA",
    parkCode: "kemo",
    designation: "National Battlefield Park",
    fullName: "Kennesaw Mountain National Battlefield Park",
    URL: "https://www.nps.gov/kemo/index.htm",
    name: "Kennesaw Mountain"
  },
  {
    states: "MI",
    parkCode: "kewe",
    designation: "National Historical Park",
    fullName: "Keweenaw National Historical Park",
    URL: "https://www.nps.gov/kewe/index.htm",
    name: "Keweenaw"
  },
  {
    states: "AK",
    parkCode: "klgo",
    designation: "National Historical Park",
    fullName: "Klondike Gold Rush National Historical Park",
    URL: "https://www.nps.gov/klgo/index.htm",
    name: "Klondike Gold Rush"
  },
  {
    states: "CA",
    parkCode: "lavo",
    designation: "National Park",
    fullName: "Lassen Volcanic National Park",
    URL: "https://www.nps.gov/lavo/index.htm",
    name: "Lassen Volcanic"
  },
  {
    states: "IN",
    parkCode: "libo",
    designation: "National Memorial",
    fullName: "Lincoln Boyhood National Memorial",
    URL: "https://www.nps.gov/libo/index.htm",
    name: "Lincoln Boyhood"
  },
  {
    states: "MA",
    parkCode: "long",
    designation: "National Historic Site",
    fullName: "Longfellow House Washington's Headquarters National Historic Site",
    URL: "https://www.nps.gov/long/index.htm",
    name: "Longfellow House Washington's Headquarters"
  },
  {
    states: "MA",
    parkCode: "lowe",
    designation: "National Historical Park",
    fullName: "Lowell National Historical Park",
    URL: "https://www.nps.gov/lowe/index.htm",
    name: "Lowell"
  },
  {
    states: "VT",
    parkCode: "mabi",
    designation: "National Historical Park",
    fullName: "Marsh - Billings - Rockefeller National Historical Park",
    URL: "https://www.nps.gov/mabi/index.htm",
    name: "Marsh - Billings - Rockefeller"
  },
  {
    states: "GA",
    parkCode: "malu",
    designation: "National Historical Park",
    fullName: "Martin Luther King, Jr. National Historical Park",
    URL: "https://www.nps.gov/malu/index.htm",
    name: "Martin Luther King, Jr."
  },
  {
    states: "NY",
    parkCode: "mava",
    designation: "National Historic Site",
    fullName: "Martin Van Buren National Historic Site",
    URL: "https://www.nps.gov/mava/index.htm",
    name: "Martin Van Buren"
  },
  {
    states: "VA",
    parkCode: "mawa",
    designation: "National Historic Site",
    fullName: "Maggie L Walker National Historic Site",
    URL: "https://www.nps.gov/mawa/index.htm",
    name: "Maggie L Walker"
  },
  {
    states: "MA",
    parkCode: "mima",
    designation: "National Historical Park",
    fullName: "Minute Man National Historical Park",
    URL: "https://www.nps.gov/mima/index.htm",
    name: "Minute Man"
  },
  {
    states: "MN",
    parkCode: "miss",
    designation: "National River & Recreation Area",
    fullName: "Mississippi National River & Recreation Area",
    URL: "https://www.nps.gov/miss/index.htm",
    name: "Mississippi"
  },
  {
    states: "SD,NE",
    parkCode: "mnrr",
    designation: "National Recreational River",
    fullName: "Missouri National Recreational River",
    URL: "https://www.nps.gov/mnrr/index.htm",
    name: "Missouri"
  },
  {
    states: "AZ",
    parkCode: "moca",
    designation: "National Monument",
    fullName: "Montezuma Castle National Monument",
    URL: "https://www.nps.gov/moca/index.htm",
    name: "Montezuma Castle"
  },
  {
    states: "WA",
    parkCode: "mora",
    designation: "National Park",
    fullName: "Mount Rainier National Park",
    URL: "https://www.nps.gov/mora/index.htm",
    name: "Mount Rainier"
  },
  {
    states: "CA",
    parkCode: "muwo",
    designation: "National Monument",
    fullName: "Muir Woods National Monument",
    URL: "https://www.nps.gov/muwo/index.htm",
    name: "Muir Woods"
  },
  {
    states: "DC",
    parkCode: "nace",
    designation: "",
    fullName: "National Capital Parks-East",
    URL: "https://www.nps.gov/nace/index.htm",
    name: "National Capital Parks-East"
  },
  {
    states: "DC",
    parkCode: "nama",
    designation: "",
    fullName: "National Mall and Memorial Parks",
    URL: "https://www.nps.gov/nama/index.htm",
    name: "National Mall and Memorial Parks"
  },
  {
    states: "AL,MS,TN",
    parkCode: "natr",
    designation: "Parkway",
    fullName: "Natchez Trace Parkway",
    URL: "https://www.nps.gov/natr/index.htm",
    name: "Natchez Trace"
  },
  {
    states: "AZ",
    parkCode: "nava",
    designation: "National Monument",
    fullName: "Navajo National Monument",
    URL: "https://www.nps.gov/nava/index.htm",
    name: "Navajo"
  },
  {
    states: "MA",
    parkCode: "nebe",
    designation: "National Historical Park",
    fullName: "New Bedford Whaling National Historical Park",
    URL: "https://www.nps.gov/nebe/index.htm",
    name: "New Bedford Whaling"
  },
  {
    states: "ID,MT,OR,WA",
    parkCode: "nepe",
    designation: "National Historical Park",
    fullName: "Nez Perce National Historical Park",
    URL: "https://www.nps.gov/nepe/index.htm",
    name: "Nez Perce"
  },
  {
    states: "NE",
    parkCode: "niob",
    designation: "National Scenic River",
    fullName: "Niobrara National Scenic River",
    URL: "https://www.nps.gov/niob/index.htm",
    name: "Niobrara"
  },
  {
    states: "TX",
    parkCode: "paal",
    designation: "National Historical Park",
    fullName: "Palo Alto Battlefield National Historical Park",
    URL: "https://www.nps.gov/paal/index.htm",
    name: "Palo Alto Battlefield"
  },
  {
    states: "VA",
    parkCode: "pete",
    designation: "National Battlefield",
    fullName: "Petersburg National Battlefield",
    URL: "https://www.nps.gov/pete/index.htm",
    name: "Petersburg"
  },
  {
    states: "OH",
    parkCode: "pevi",
    designation: "Memorial",
    fullName: "Perry's Victory & International Peace Memorial",
    URL: "https://www.nps.gov/pevi/index.htm",
    name: "Perry's Victory & International Peace"
  },
  {
    states: "HI",
    parkCode: "puho",
    designation: "National Historical Park",
    fullName: "Puʻuhonua o Hōnaunau National Historical Park",
    URL: "https://www.nps.gov/puho/index.htm",
    name: "Puʻuhonua o Hōnaunau"
  },
  {
    states: "CA",
    parkCode: "redw",
    designation: "National and State Parks",
    fullName: "Redwood National and State Parks",
    URL: "https://www.nps.gov/redw/index.htm",
    name: "Redwood"
  },
  {
    states: "CO",
    parkCode: "romo",
    designation: "National Park",
    fullName: "Rocky Mountain National Park",
    URL: "https://www.nps.gov/romo/index.htm",
    name: "Rocky Mountain"
  },
  {
    states: "CA",
    parkCode: "rori",
    designation: "National Historical Park",
    fullName: "Rosie the Riveter WWII Home Front National Historical Park",
    URL: "https://www.nps.gov/rori/index.htm",
    name: "Rosie the Riveter WWII Home Front"
  },
  {
    states: "RI",
    parkCode: "rowi",
    designation: "National Memorial",
    fullName: "Roger Williams National Memorial",
    URL: "https://www.nps.gov/rowi/index.htm",
    name: "Roger Williams"
  },
  {
    states: "NH",
    parkCode: "saga",
    designation: "National Historical Park",
    fullName: "Saint-Gaudens National Historical Park",
    URL: "https://www.nps.gov/saga/index.htm",
    name: "Saint-Gaudens"
  },
  {
    states: "CA",
    parkCode: "samo",
    designation: "National Recreation Area",
    fullName: "Santa Monica Mountains National Recreation Area",
    URL: "https://www.nps.gov/samo/index.htm",
    name: "Santa Monica Mountains"
  },
  {
    states: "CA",
    parkCode: "seki",
    designation: "National Parks",
    fullName: "Sequoia & Kings Canyon National Parks",
    URL: "https://www.nps.gov/seki/index.htm",
    name: "Sequoia & Kings Canyon"
  },
  {
    states: "AL",
    parkCode: "semo",
    designation: "National Historic Trail",
    fullName: "Selma To Montgomery National Historic Trail",
    URL: "https://www.nps.gov/semo/index.htm",
    name: "Selma To Montgomery"
  },
  {
    states: "VA",
    parkCode: "shen",
    designation: "National Park",
    fullName: "Shenandoah National Park",
    URL: "https://www.nps.gov/shen/index.htm",
    name: "Shenandoah"
  },
  {
    states: "PA",
    parkCode: "stea",
    designation: "National Historic Site",
    fullName: "Steamtown National Historic Site",
    URL: "https://www.nps.gov/stea/index.htm",
    name: "Steamtown"
  },
  {
    states: "NY",
    parkCode: "stli",
    designation: "National Monument",
    fullName: "Statue Of Liberty National Monument",
    URL: "https://www.nps.gov/stli/index.htm",
    name: "Statue Of Liberty"
  },
  {
    states: "TN",
    parkCode: "stri",
    designation: "National Battlefield",
    fullName: "Stones River National Battlefield",
    URL: "https://www.nps.gov/stri/index.htm",
    name: "Stones River"
  },
  {
    states: "KS",
    parkCode: "tapr",
    designation: "National Preserve",
    fullName: "Tallgrass Prairie National Preserve",
    URL: "https://www.nps.gov/tapr/index.htm",
    name: "Tallgrass Prairie"
  },
  {
    states: "AL",
    parkCode: "tuai",
    designation: "National Historic Site",
    fullName: "Tuskegee Airmen National Historic Site",
    URL: "https://www.nps.gov/tuai/index.htm",
    name: "Tuskegee Airmen"
  },
  {
    states: "AZ",
    parkCode: "tuma",
    designation: "National Historical Park",
    fullName: "Tumacácori National Historical Park",
    URL: "https://www.nps.gov/tuma/index.htm",
    name: "Tumacácori"
  },
  {
    states: "AZ",
    parkCode: "tuzi",
    designation: "National Monument",
    fullName: "Tuzigoot National Monument",
    URL: "https://www.nps.gov/tuzi/index.htm",
    name: "Tuzigoot"
  },
  {
    states: "MO",
    parkCode: "ulsg",
    designation: "National Historic Site",
    fullName: "Ulysses S Grant National Historic Site",
    URL: "https://www.nps.gov/ulsg/index.htm",
    name: "Ulysses S Grant"
  },
  {
    states: "MS,LA",
    parkCode: "vick",
    designation: "National Military Park",
    fullName: "Vicksburg National Military Park",
    URL: "https://www.nps.gov/vick/index.htm",
    name: "Vicksburg"
  },
  {
    states: "OK",
    parkCode: "waba",
    designation: "National Historic Site",
    fullName: "Washita Battlefield National Historic Site",
    URL: "https://www.nps.gov/waba/index.htm",
    name: "Washita Battlefield"
  },
  {
    states: "CT",
    parkCode: "wefa",
    designation: "National Historical Park",
    fullName: "Weir Farm National Historical Park",
    URL: "https://www.nps.gov/wefa/index.htm",
    name: "Weir Farm"
  },
  {
    states: "DC",
    parkCode: "whho",
    designation: "",
    fullName: "The White House and President's Park",
    URL: "https://www.nps.gov/whho/index.htm",
    name: "The White House and President's Park"
  },
  {
    states: "NM",
    parkCode: "whsa",
    designation: "National Park",
    fullName: "White Sands National Park",
    URL: "https://www.nps.gov/whsa/index.htm",
    name: "White Sands"
  },
  {
    states: "NY",
    parkCode: "wori",
    designation: "National Historical Park",
    fullName: "Women's Rights National Historical Park",
    URL: "https://www.nps.gov/wori/index.htm",
    name: "Women's Rights"
  },
  {
    states: "AK",
    parkCode: "wrst",
    designation: "National Park & Preserve",
    fullName: "Wrangell - St Elias National Park & Preserve",
    URL: "https://www.nps.gov/wrst/index.htm",
    name: "Wrangell - St Elias"
  },
  {
    states: "ID,MT,WY",
    parkCode: "yell",
    designation: "National Park",
    fullName: "Yellowstone National Park",
    URL: "https://www.nps.gov/yell/index.htm",
    name: "Yellowstone"
  }
]
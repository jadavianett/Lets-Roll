let mongoose = require("mongoose");
let db = require("./models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

let simpleSeeds = [
  {
    name: "Historic Fourth Ward Skate Park",
    location: "830 Willoughby Way NE, Atlanta, GA 30312",
    type: "Skate Park",
  },
  {
    name: "McKoy Skate Park",
    location: "1000 Adams St, Decatur, GA 30030",
    type: "Skate Park",
  },
  {
    name: "Riverdale Skatepark",
    location: "904 Wilson Rd, Riverdale, GA 30296",
    type: "Skate Park",
  },
  {
    name: "Brook Run Skate Park",
    location: "4770 N Peachtree Rd, Dunwoody, GA 30338",
    type: "Skate Park",
  },
  {
    name: "Kennesaw Skatepark",
    location: "3140 Old 41 Hwy NW, Kennesaw, GA 30144",
    type: "Skate Park",
  },
  {
    name: "Pinckney Skatepark",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Skate Park",
  },
  {
    name: "Hapeville Skate Park",
    location: "532-500 Marina St, Hapeville, GA 30354",
    type: "Skate Park",
  },
  {
    name: "JB Williams Park",
    location: "4935 Five Forks Trickum Rd SW, Lilburn, GA 30047",
    type: "Skate Park",
  },
  {
    name: "Pinckney Skatepark",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Skate Park",
  },
  {
    name: "Union Hill Park",
    location: "1590 Little Pine Trail, Alpharetta, GA 30005",
    type: "Outdoor Rink",
  },
  {
    name: "East Side Beltline",
    location: "Intersection of 10th St NE & Monroe Dr NE, Atlanta, GA 30306",
    type: "Beltline",
  },
  {
    name: "West Side Beltline",
    location:
      "Intersection of University Ave SW & Metropolitan Pkwy SW, Atlanta, GA 30310 (Head west on University)",
    type: "Beltline",
  },
  {
    name: "North Side Beltline",
    location:
      "Bobby Jones Golf Course, 2205 Northside Dr NW, Atlanta, GA 30305",
    type: "Beltline",
  },
  {
    name: "Silver Comet",
    location: "Mavell Road Trailhead, Mavell Rd, Smyrna, GA 30082",
    type: "Trail",
  },
  {
    name: "Peachtree Greenway",
    location: "2036 N Druid Hills Rd NE, Brookhaven GA",
    type: "Greenway",
  },
  {
    name: "Carrollton Greenbelt",
    location:
      "Many access points around Carrollton, see https://www.carrolltongreenbelt.com/trailheads/",
    type: "Beltline",
  },
  {
    name: "Clayton Connects",
    location: "Creek St & Crane Rd, Jonesboro, Georgia 30236",
    type: "Beltline",
  },
  {
    name: "East Decatur Greenway",
    location:
      "East Decatur Greenway Trailhead, 890 S Columbia Dr, Decatur, GA 30030",
    type: "Greenway",
  },
  {
    name: "LaGrange Thread",
    location: "Eastside Park, LaGrange, GA 30241",
    type: "Trail",
  },
  {
    name: "Nancy Creek Trail",
    location:
      "Murphey Candler Park, 1551 W Nancy Creek Dr NE, Atlanta, GA 30319",
    type: "Trail",
  },
  {
    name: "Newnan LINC, Phase 1",
    location:
      "Intersection of Summerlin Blvd & Newnan Crossing Blvd, Newnan, GA 30265",
    type: "Trail",
  },
  {
    name: "Olde Town Trail",
    location: "Johnson Park, 1781 Ebenezer Rd SW, Conyers, GA 30094",
    type: "Trail",
  },
  {
    name: "Proctor Creek Greenway",
    location:
      "Near intersection of Drew Dr & Sanford Dr, Atlanta, GA 30318 (Head south on Sanford)",
    type: "Greenway",
  },
  {
    name: "South River Trail",
    location:
      "Atlanta Radio Control Club, 1600 Constitution Rd SE, Atlanta, GA 30316;",
    type: "Trail",
  },
  {
    name: "Picnkneyville Park",
    location: "4758 S Old Peachtree Rd, Peachtree Corners, GA 30071",
    type: "Park",
  },
  {
    name: "Legion Field - Covington Fairgroundsk",
    location: "3173 Mill St NE, Covington, GA 30014",
    type: "Park",
  },
  {
    name: "Coan Park",
    location: "1530 Woodbine Ave SE, Atlanta, GA 30317",
    type: "Park",
  },
  {
    name: "Freedom Park",
    location:
      "Intersection of Moreland Ave NE & North Avenue NE, Atlanta, GA 30308",
    type: "Park",
  },
];

db.Place.deleteMany({})
  .then(() => db.Place.collection.insertMany(simpleSeeds))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

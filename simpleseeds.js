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
    notes: ["Located right on the Beltline.", "Usually full of skaters but is empty later in the night.", "Has floodlights that come on when the sun sets!"]
  },
  {
    name: "McKoy Skate Park",
    location: "1000 Adams St, Decatur, GA 30030",
    type: "Skate Park",
    notes: ["Small, beginner friendly skate park!", "No floodlights so be careful skating after dark."]
  },
  {
    name: "Riverdale Skatepark",
    location: "904 Wilson Rd, Riverdale, GA 30296",
    type: "Skate Park",
    notes: ["Beginner friendly, small skate park.", "One large bowl for dropping in and a few rails."]
  },
  {
    name: "Brook Run Skate Park",
    location: "4770 N Peachtree Rd, Dunwoody, GA 30338",
    type: "Skate Park",
    notes: ["Huge skate park with multiple bowls.", "Can be intimidating for beginners!", "Floodlights come on when the sun goes down so its safe to skate after dark."]
  },
  {
    name: "Kennesaw Skatepark",
    location: "3140 Old 41 Hwy NW, Kennesaw, GA 30144",
    type: "Skate Park",
    notes: ["Mid-sized skate park.", "Floodlights light the park after dark!"]
  },
  {
    name: "Pinckneyville Skatepark",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Skate Park",
    notes: ["Very small skate park with two bowls for dropping in.", "Located right next to the Pickneyville Outdoor Rink which is perfect for beginners!"]
  },
  {
    name: "Pinckneyville Outdoor Rink",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Outdoor Rink",
    notes: ["HUGE covered outdoor rink that is perfect for beginners", "The Norcross Hockey Team practices here during the week so it is best to go Friday-Sunday.", "Lights are not turned on after the sun goes down, but some light shines over from the skate park."]
  },
  {
    name: "Hapeville Skate Park",
    location: "532-500 Marina St, Hapeville, GA 30354",
    type: "Skate Park",
    notes: ["Brand new skate park!", "Located next to tennis courts which are also great for roller skating."]
  },
  {
    name: "JB Williams Park",
    location: "4935 Five Forks Trickum Rd SW, Lilburn, GA 30047",
    type: "Skate Park",
    notes: ["Large skate park.", "Frequented by a lot of skateboard enthusiasts which can be intimidating for beginners."]
  },
  {
    name: "Union Hill Park",
    location: "1590 Little Pine Trail, Alpharetta, GA 30005",
    type: "Outdoor Rink",
    notes: ["Has an outdoor skate park and a covered outdoor roller rink!", "There is a concession stand available for rental."]
  },
  {
    name: "East Side Beltline",
    location: "Intersection of 10th St NE & Monroe Dr NE, Atlanta, GA 30306",
    type: "Beltline",
    notes: ["There are many entry points for the Eastside Beltline.", "This part of the Beltline is usually really crowded so be prepared to weave through people.", "There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "West Side Beltline",
    location:
      "Intersection of University Ave SW & Metropolitan Pkwy SW, Atlanta, GA 30310 (Head west on University)",
    type: "Beltline",
    notes: ["There are many entry points for the Westside Beltline - we recommend parking at Monday Night Garage!", "This part of the Beltline is much less crowded than the Eastside Beltline.", "There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "North Side Beltline",
    location:
      "Bobby Jones Golf Course, 2205 Northside Dr NW, Atlanta, GA 30305",
    type: "Beltline",
    notes: ["There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "Silver Comet",
    location: "Mavell Road Trailhead, Mavell Rd, Smyrna, GA 30082",
    type: "Trail",
    notes: ["Nice wooded trail with no ridges, great for cruising!", "There are a lot of serious bikers on this trail, so be aware of your surroundings.", "There are no lights on this trail so it is not very safe after dark."]
  },
  {
    name: "Peachtree Greenway",
    location: "2036 N Druid Hills Rd NE, Brookhaven GA",
    type: "Greenway",
    notes: ["Under construction, be careful and check their updated map before visiting!", "Very hilly!"]
  },
  {
    name: "Carrollton Greenbelt",
    location:
      "Many access points around Carrollton, see https://www.carrolltongreenbelt.com/trailheads/",
    type: "Beltline",
    notes: ["Many access points!", "Relatively flat, there are some street crossings and wooden bridges."]
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

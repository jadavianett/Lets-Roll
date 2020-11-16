//importing required package and models 
let mongoose = require("mongoose");
let db = require("./models");

// connection to the mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my-mern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// declaring the simple seed array for basic skate places available to all 
let simpleSeeds = [
  {
    name: "Historic Fourth Ward Skate Park",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROgW8orvhtgaYhF_OdZx4ouIYIy8f878n6ZA&usqp=CAU",
    location: "830 Willoughby Way NE, Atlanta, GA 30312",
    type: "Skate Park",
    notes: ["Located right on the Beltline.", "Usually full of skaters but is empty later in the night.", "Has floodlights that come on when the sun sets!"]
  },
  {
    name: "McKoy Skate Park",
    image: "https://storage.googleapis.com/fsscs1/images/medium/9f5a045e1371360468f0d004ebbd0544.jpg",
    location: "1000 Adams St, Decatur, GA 30030",
    type: "Skate Park",
    notes: ["Small, beginner friendly skate park!", "No floodlights so be careful skating after dark."]
  },
  {
    name: "Riverdale Skatepark",
    image: "https://www.ajc.com/resizer/yENsoBwOV2kXWHAzoiUmrYctig4=/1066x600/cloudfront-us-east-1.images.arcpublishing.com/ajc/R3ZUFAL45BYY2UQRDTWDXPCC3Q.jpg",
    location: "904 Wilson Rd, Riverdale, GA 30296",
    type: "Skate Park",
    notes: ["Beginner friendly, small skate park.", "One large bowl for dropping in and a few rails."]
  },
  {
    name: "Brook Run Skate Park",
    image: "https://silvermancpm.com/wp-content/gallery/brook-run/brook-run-gallery2.jpg",
    location: "4770 N Peachtree Rd, Dunwoody, GA 30338",
    type: "Skate Park",
    notes: ["Huge skate park with multiple bowls.", "Can be intimidating for beginners!", "Floodlights come on when the sun goes down so its safe to skate after dark."]
  },
  {
    name: "Kennesaw Skatepark",
    image: "https://i.pinimg.com/originals/e8/d2/fa/e8d2fab8e63477528170c3b6f41d466d.jpg",
    location: "3140 Old 41 Hwy NW, Kennesaw, GA 30144",
    type: "Skate Park",
    notes: ["Mid-sized skate park.", "Floodlights light the park after dark!"]
  },
  {
    name: "Pinckneyville Skatepark",
    image:"https://i.pinimg.com/originals/28/3b/b9/283bb99fd200b94bf3272ce0022481eb.jpg",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Skate Park",
    notes: ["Very small skate park with two bowls for dropping in.", "Located right next to the Pickneyville Outdoor Rink which is perfect for beginners!"]
  },
  {
    name: "Pinckneyville Outdoor Rink",
    image: "https://i.pinimg.com/originals/96/ec/e9/96ece98704801554a58e7b854e609580.jpg",
    location: "4758 S Old Peachtree Rd, Norcross, GA 30071",
    type: "Outdoor Rink",
    notes: ["HUGE covered outdoor rink that is perfect for beginners", "The Norcross Hockey Team practices here during the week so it is best to go Friday-Sunday.", "Lights are not turned on after the sun goes down, but some light shines over from the skate park."]
  },
  {
    name: "Hapeville Skate Park",
    image: "https://media.11alive.com/assets/WXIA/images/7ee0d4eb-b3da-4f28-8d5b-d66d6ad65a43/7ee0d4eb-b3da-4f28-8d5b-d66d6ad65a43_1140x641.png",
    location: "532-500 Marina St, Hapeville, GA 30354",
    type: "Skate Park",
    notes: ["Brand new skate park!", "Located next to tennis courts which are also great for roller skating."]
  },
  {
    name: "JB Williams Park",
    image: "https://www.pondco.com/project/jb-williams-park/jb-williams-park-13/",
    location: "4935 Five Forks Trickum Rd SW, Lilburn, GA 30047",
    type: "Skate Park",
    notes: ["Large skate park.", "Frequented by a lot of skateboard enthusiasts which can be intimidating for beginners."]
  },
  {
    name: "Union Hill Park",
    image: "https://1.bp.blogspot.com/-IUsKVTsZNrY/Td6p60t1THI/AAAAAAAAAHM/HTbG_fAs0V4/s1600/IMG_3574.JPG",
    location: "1590 Little Pine Trail, Alpharetta, GA 30005",
    type: "Outdoor Rink",
    notes: ["Has an outdoor skate park and a covered outdoor roller rink!", "There is a concession stand available for rental."]
  },
  {
    name: "East Side Beltline",
    image: "https://www.exploregeorgia.org/sites/default/files/legacy_images/atlanta-beltline-and-ponce-city-market-1489780353.jpg",
    location: "Intersection of 10th St NE & Monroe Dr NE, Atlanta, GA 30306",
    type: "Beltline",
    notes: ["There are many entry points for the Eastside Beltline.", "This part of the Beltline is usually really crowded so be prepared to weave through people.", "There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "West Side Beltline",
    image: "https://cdn.vox-cdn.com/thumbor/plz5koqC2dWAZSVzLnrZR4XVAaY=/0x0:1500x998/1200x800/filters:focal(630x379:870x619)/cdn.vox-cdn.com/uploads/chorus_image/image/61495991/JTP_9827.0.jpg",
    location:
      "Intersection of University Ave SW & Metropolitan Pkwy SW, Atlanta, GA 30310 (Head west on University)",
    type: "Beltline",
    notes: ["There are many entry points for the Westside Beltline - we recommend parking at Monday Night Garage!", "This part of the Beltline is much less crowded than the Eastside Beltline.", "There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "North Side Beltline",
    image: "https://www.atlantatrails.com/wp-content/uploads/2019/02/tanyard-creek-park-northside-beltline.jpg",
    location:
      "Bobby Jones Golf Course, 2205 Northside Dr NW, Atlanta, GA 30305",
    type: "Beltline",
    notes: ["There are ridges in the pavement about every 3 yards which can make it difficult to cruise."]
  },
  {
    name: "Silver Comet",
    image: "https://www.atlantatrails.com/wp-content/uploads/2018/01/silver-comet-trail-03.jpg",
    location: "Mavell Road Trailhead, Mavell Rd, Smyrna, GA 30082",
    type: "Trail",
    notes: ["Nice wooded trail with no ridges, great for cruising!", "There are a lot of serious bikers on this trail, so be aware of your surroundings.", "There are no lights on this trail so it is not very safe after dark."]
  },
  {
    name: "Peachtree Greenway",
    image: "https://cdn.vox-cdn.com/thumbor/qoAqxPw65dP6ElPviPYzCRiokao=/0x0:1500x998/1200x480/filters:focal(630x379:870x619)/cdn.vox-cdn.com/uploads/chorus_image/image/65577619/JTP_7517.0.jpg",
    location: "2036 N Druid Hills Rd NE, Brookhaven GA",
    type: "Greenway",
    notes: ["Under construction, be careful and check their updated map before visiting!", "Very hilly!"]
  },
  {
    name: "Carrollton Greenbelt",
    image: "https://www.exploregeorgia.org/sites/default/files/listing_images/profile/28473/IMG_1998.jpg",
    location:
      "Many access points around Carrollton, see https://www.carrolltongreenbelt.com/trailheads/",
    type: "Beltline",
    notes: ["Many access points!", "Relatively flat, there are some street crossings and wooden bridges."]
  },
  {
    name: "East Decatur Greenway",
    image: "https://cloudfront.traillink.com/photos/east-decatur-greenway_161230_sc.jpg",
    location:
      "East Decatur Greenway Trailhead, 890 S Columbia Dr, Decatur, GA 30030",
    type: "Greenway",
    notes: ["Good for beginners!", "Hilly in some spots."]
  },
  {
    name: "LaGrange Thread",
    image: "https://www.visitlagrange.com/wp-content/uploads/The-Thread-Boardwalk-LaGrange-Walking-Path-2-697x465.jpg",
    location: "Eastside Park, LaGrange, GA 30241",
    type: "Trail",
    notes: ["Some wooden bridges and street crossings."]
  },
  {
    name: "Nancy Creek Trail",
    image: "https://www.tripsavvy.com/thmb/AVvC-v3IuJnU0oN95xcqnnJrNwM=/730x441/filters:no_upscale():max_bytes(150000):strip_icc()/nancycreek-730x441-56a04eae5f9b58eba4afd71e.jpg",
    location:
      "Murphey Candler Park, 1551 W Nancy Creek Dr NE, Atlanta, GA 30319",
    type: "Trail",
    notes: ["5.4 mile out and back trail.", "Almost the entire trail is in full sunlight and there is little elevation change!", "Crosses Nancy Creek once, on a bridge between Murphy Candler Park and Blackburn Park."]
  },
  {
    name: "Newnan LINC, Phase 1",
    image: "https://lincfriends.com/templates/rt_protean/custom/images/photomorphs/trailweb.jpg",
    location:
      "1515 Lower Fayetteville Rd, Newnan, GA 30265",
    type: "Trail",
    notes: ["Lovely trailhead with benches, a dog station, bike repair station, trash receptacles, and signage.", "Additional parking closer to Newnan Crossing Elementary School on Summerlin Road.", "Phase 1 is completed and features woods, bridges, a mural, and a big hill."]
  },
  {
    name: "Olde Town Trail",
    image: "https://covingtonnews.cdn-anvilcms.net/media/images/2017/10/20/images/IMG_8922.max-640x480.jpg",
    location: "Johnson Park, 1781 Ebenezer Rd SW, Conyers, GA 30094",
    type: "Trail",
    notes: ["Crosses over streets multiple times.", "May not be suitable for beginners."]
  },
  {
    name: "Proctor Creek Greenway",
    image: "https://cdn.vox-cdn.com/thumbor/EaHEFHx_bivRpyd3UAa2407M9gU=/0x0:1500x998/1200x0/filters:focal(0x0:1500x998):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/10823765/JTP_6370.jpg",
    location:
      "Near intersection of Drew Dr & Sanford Dr, Atlanta, GA 30318 (Head south on Sanford)",
    type: "Greenway",
    notes: ["Scenic route that winds through a lot of abandoned industrial buildings.", "Not safe to visit by yourself!"]
  },
  {
    name: "South River Trail",
    image: "https://i.redd.it/gtk21m0unt811.jpg",
    location:
      "Atlanta Radio Control Club, 1600 Constitution Rd SE, Atlanta, GA 30316;",
    type: "Trail",
    notes: ["Peaceful, sparsely populated trail.", "Offers a wooded route along its namesake river!"]
  },
  {
    name: "Legion Field - Covington Fairgrounds",
    image: "https://covingtonnews.cdn-anvilcms.net/media/images/2017/09/22/images/0605LEGION_FIELD.max-752x423.jpg",
    location: "3173 Mill St NE, Covington, GA 30014",
    type: "Park",
  },
  {
    name: "Coan Park",
    image: "https://www.nba.com/hawks/sites/hawks/files/selectshawkscoanpark-37_0.jpg",
    location: "1530 Woodbine Ave SE, Atlanta, GA 30317",
    type: "Park",
    notes: ["Two basketball courts and four tennis courts are located here!", "There is a covered, paved, basketball pad attached to the Sammye E. Coan building that's perfect for skating!"]
  },
  {
    name: "Freedom Park",
    image: "https://images.squarespace-cdn.com/content/v1/54b7bf9de4b0226a9004011f/1477061331564-1TEE0BIM1593WQXN2D1O/ke17ZwdGBToddI8pDm48kHkwWL02BYhMdoy1RWvft0N7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdV6GQW1kwP5MmP7qfO6Gy3d8JfBy9xIFlIv1sNJX8ro7u2n8TtsgZ4gBjx6Acj23g/HSP_4831.jpg",
    location:
      "Intersection of Moreland Ave NE & North Avenue NE, Atlanta, GA 30308",
    type: "Park",
    notes: ["A bit hilly.", "A shady trail that extends nineteen miles from Downtown to Stone Mountain!"]
  },
  {
    name: "Walker Park Soccer Pad",
    image: "https://images.pexels.com/photos/2005992/pexels-photo-2005992.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    location: "200 Memorial Terrace SE, Atlanta, GA 30316",
    type: "Other",
    notes: ["A small paved soccer pad that's doubles as a great place to skate.", "There are some minor cracks in the pavement so be careful!", "This skate place is most easily accessed by parking at the end of East Side Ave."]
  }
];

// dropping the db first then inserting the simple seeds into the database
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

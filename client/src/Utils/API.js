import axios from "axios";

export default {
  //USER CALLS
  // Get All Users
  getUser: function () {
    return axios.get("/api/user");
  },
  //create a new User
  createUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  // Sign up user goes through authorization route on backend 
  signupUser: function (userData) {
    return axios.post("/api/signup", userData);
  },


  //PLACES CALLS

  //Get All Places
  getPlaces: function () {
    return axios.get("/api/places");
  },

  // Get Place by id
  getPlace: function (id) {
    return axios.get("/api/places/" + id);
  },

  //Create a Place
  createPlace: function (placeData,token) {
    // return axios.post("/api/places", placeData,{ headers: {
    //   'Authorization': `${token}` 
    // }});

    return axios.post("/api/places", placeData);
  },

  //Update Place
  updatePlace: function (id, updatedPlace) {
    return axios.put("/api/places/" + id, updatedPlace);
  },

  //Delete Place
  deletePlace: function (id) {
    return axios.delete("/api/places/" + id);
  }


};

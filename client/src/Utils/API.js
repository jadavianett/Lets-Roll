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

  updateUser: function (id) {
    return axios.put("/api/user/" + id);
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
  createPlace: function (placeData) {
    return axios.post("/api/places", placeData);
  },

  //Update Place
  updatePlace: function (id, updatedPlace) {
    return axios.put("/api/places/" + id, updatedPlace);
  },

  //Delete Place
  deletePlace: function (id) {
    return axios.delete("/api/places/" + id);
  },

  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/posts/" + id);
  // },
  // // Saves a post to the database
  // savePost: function(postData) {
  //   return axios.post("/api/posts", postData);
  // }
};

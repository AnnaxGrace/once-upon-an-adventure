import axios from "axios";

export default {
  // Get all users
  getUser: function(userData) {
    return axios.get("/api/signup", userData );
  },
  
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  },

  findUser: function(userData) {
    return axios.post("/api/signup/login", userData);
  }
};

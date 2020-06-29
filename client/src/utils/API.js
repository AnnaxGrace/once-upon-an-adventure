import axios from "axios";

export default {
  // Get all users
  getUser: function() {
    return axios.get("/api/login");
  },
  
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/signup", userData);
  }
};

import axios from "axios";
// import Story from "../../../models/storyModel";

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
  },

  // findSprite: function(userData) {
  //   return axios.post("/api/sprite", userData);
  // },

  getSprite: function(spriteData) {
    return axios.get("/api/sprite", spriteData );
  },

  getUserSprite: function(id) {
    return axios.get(`/api/user/avatar/${id}`)
  },

  getUserInventory: function(id) {
    return axios.get(`/api/user/inventory/${id}`)
  },
  
  UpdateSpriteMoney: function(spriteData, id) {
    return axios.put("/api/sprite/" + id, spriteData);
  },
  UpdateSpriteHomeFirst: function(spriteData, id) {
    return axios.put("/api/sprite/homefirst/" + id, spriteData);
  },

  UpdateSpriteFirstGuardTalk: function(spriteData, id) {
    return axios.put("/api/sprite/guardTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstOrcTalk: function(spriteData, id) {
    return axios.put("/api/sprite/orcTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstJaceTalk: function(spriteData, id) {
    return axios.put("/api/sprite/jaceTalk/" + id ,spriteData)
  },

  UpdateSpriteFirstThiefTalk: function(spriteData, id) {
    return axios.put("/api/sprite/thiefTalk/" + id ,spriteData)
  },

  UpdateSpritePlaceCliff: function(spriteData, id) {
    return axios.put("/api/sprite/placeCliff/" + id, spriteData)
  },

  UpdateSpritePlaceForest: function(spriteData, id) {
    return axios.put("/api/sprite/placeForest/" + id, spriteData)
  },
  
  
  UpdateSpritePermit: function(spriteData, id) {
    return axios.put("/api/sprite/permit/" + id, spriteData);
  },
  
  saveSprite: function(spriteData, id) {
    return axios.post("/api/sprite/" + id, spriteData);
  },
  getInventory: function(spriteData) {
    return axios.get("/api/inventory", spriteData );
  },
  saveInventory: function(spriteData, id) {
    return axios.post("/api/inventory" + id, spriteData);
  },
  createStory: function(storyData) {
    return axios.post("/api/story", storyData);
  },
  findAllStory: function() {
    return axios.get("/api/story");
  },
  findUserStory: function(id) {
    return axios.get("/api/story/" + id);
  },
  UpdateUserStory: function(id, storyData) {
    return axios.post("/api/story/" + id, storyData);
  }
 

};

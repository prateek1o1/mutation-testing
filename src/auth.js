// auth.js

class Auth {
    constructor() {
      this.users = [];
      this.currentUser = null;
    }
  
    registerUser(username, password) {
      if (this.users.some(user => user.username === username)) {
        throw new Error('Username already exists');
      }
  
      this.users.push({ username, password });
    }
  
    loginUser(username, password) {
      const user = this.users.find(user => user.username === username);
  
      if (user && user.password === password) {
        this.currentUser = username;
        return true;
      }
  
      return false;
    }
  
    logoutUser() {
      this.currentUser = null;
    }
  
    isAuthenticated() {
      return this.currentUser !== null;
    }
  }
  
  module.exports = Auth;
  
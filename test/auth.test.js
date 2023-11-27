// auth.test.js

const assert = require('assert');
const Auth = require('../core/auth');

describe('Unit Test - Authentication Operations', () => {
  it('should register a new user', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');

    assert.deepStrictEqual(auth.users, [{ username: 'user1', password: 'password123' }]);
  });

  it('should throw an error with a specific message when registering a duplicate username', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');

    try {
      auth.registerUser('user1', 'anotherPassword');
      // If the registration succeeds, it means the mutation has occurred.
      assert.fail('Expected an error to be thrown for duplicate username');
    } catch (error) {
      assert.equal(error.message, 'Username already exists');
    }
  });
  it('should log in a registered user with correct credentials', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    const isLoggedIn = auth.loginUser('user1', 'password123');

    assert.equal(isLoggedIn, true);
    assert.equal(auth.isAuthenticated(), true);
  });

  it('should not log in with incorrect credentials', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    const isLoggedIn = auth.loginUser('user1', 'wrongPassword');

    assert.equal(isLoggedIn, false);
    assert.equal(auth.isAuthenticated(), false);
  });

  it('should not log in without registering a user', () => {
    const auth = new Auth();
    const isLoggedIn = auth.loginUser('nonExistentUser', 'password123');

    assert.equal(isLoggedIn, false);
    assert.equal(auth.isAuthenticated(), false);
  });

  it('should log out a logged-in user', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    auth.loginUser('user1', 'password123');
    auth.logoutUser();

    assert.equal(auth.isAuthenticated(), false);
  });

  it('should check authentication status for a non-logged-in user', () => {
    const auth = new Auth();
    assert.equal(auth.isAuthenticated(), false);
  });

  it('should not log out if no user is logged in', () => {
    const auth = new Auth();

    // Attempting to log out without a prior login
    auth.logoutUser();

    // Ensure that no error occurs and the authentication status remains false
    assert.equal(auth.isAuthenticated(), false);
  });

  it('should not log in without providing a password', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');

    auth.loginUser('user1', '');

    // Ensure that no user is logged in and the authentication status remains false
    assert.equal(auth.isAuthenticated(), false);
  });

  // Additional test cases for mutation coverage
  it('should not log in with incorrect username', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    const isLoggedIn = auth.loginUser('wrongUser', 'password123');

    assert.equal(isLoggedIn, false);
    assert.equal(auth.isAuthenticated(), false);
  });

  it('should not log in with incorrect password', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    const isLoggedIn = auth.loginUser('user1', 'wrongPassword');

    assert.equal(isLoggedIn, false);
    assert.equal(auth.isAuthenticated(), false);
  });

  // Add more unit tests as needed
});

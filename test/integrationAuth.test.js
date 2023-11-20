// integrationAuth.test.js

const assert = require('assert');
const Auth = require('../src/auth');

describe('Integration Test - Authentication Operations', () => {
  it('should register a new user, log in, and check authentication status', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    auth.loginUser('user1', 'password123');

    const result = {
      registeredUsers: auth.users,
      isAuthenticated: auth.isAuthenticated(),
    };

    assert.deepStrictEqual(result, {
      registeredUsers: [{ username: 'user1', password: 'password123' }],
      isAuthenticated: true,
    });
  });

  it('should register multiple users and handle login/logout for different users', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');
    auth.registerUser('user2', 'secure456');

    auth.loginUser('user1', 'password123');
    const result1 = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result1, { currentUser: 'user1', isAuthenticated: true });

    auth.logoutUser();
    const result2 = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result2, { currentUser: null, isAuthenticated: false });

    auth.loginUser('user2', 'secure456');
    const result3 = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result3, { currentUser: 'user2', isAuthenticated: true });
  });

  it('should handle authentication status when no user is logged in', () => {
    const auth = new Auth();
    const result = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result, { currentUser: null, isAuthenticated: false });
  });

  it('should handle authentication status after registering but without logging in', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');

    const result = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result, { currentUser: null, isAuthenticated: false });
  });

  it('should not log in without providing a password', () => {
    const auth = new Auth();
    auth.registerUser('user1', 'password123');

    auth.loginUser('user1', '');

    // Ensure that no user is logged in and the authentication status remains false
    const result = {
      currentUser: auth.currentUser,
      isAuthenticated: auth.isAuthenticated(),
    };
    assert.deepStrictEqual(result, { currentUser: null, isAuthenticated: false });
  });

  // Additional integration test cases for mutation coverage
  // Add more integration tests as needed
});

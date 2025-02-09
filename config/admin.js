module.exports = {
  auth: {
    secret: 'your_secure_jwt_secret',
  },
  apiToken: {
    salt: 'cdJrmvJQeqM+3FccjcDa3w==',
  },
  transfer: {
    token: {
      salt: 'another_generated_salt',
    },
  },
  flags: {
    nps: true,
    promoteEE: true,
  },
};

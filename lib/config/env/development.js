'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://' + (process.env.MONGO_HOST || 'localhost') + '/kc-desktop'
  }
};
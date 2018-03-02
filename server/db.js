const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = () => {

  let mongoDB = process.env.MONGOLAB_MEMORII || 'mongodb://localhost/mapstory-backend'
  mongoose.connect(mongoDB, {useMongoClient: true});

  mongoose.connection.on('connected', () => {
    //eslint-disable-next-line
    console.log(`MongoDB connected to ${mongoDB}`);
  });
};

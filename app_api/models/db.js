const mongoose = require('mongoose');

//var dbURI = "mongodb+srv://archanaai:archanaai@cluster0.twow8.mongodb.net/loc8r";
const dbURI="mongodb://localhost:27017/loc8r";
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);  
});
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
  mongoose.connection.close(function () {
  console.log('Mongoose disconnected through ' + msg);
  callback();
  });
 };

 process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
  process.kill(process.pid, 'SIGUSR2');
  });
 });

 process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
  process.exit(0);
  });
 });

 process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
  process.exit(0);
  });
 });
 
require("./users")
require("./location")
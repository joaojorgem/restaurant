const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
  console.log('Database Mongo Connected');
}).catch((err) => {
    console.log(err)
  console.log('Database Mongo Error');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
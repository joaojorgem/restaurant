const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.MONGODB_ACCOUNT}/${process.env.MONGODB_DB}`

mongoose.connect(`${uri}?retryWrites=true&w=majority`, 
{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
  console.log('Database Mongo Connected');
}).catch(() => {
  console.log('Database Mongo Error');
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL).catch(err => {
  throw err;
});

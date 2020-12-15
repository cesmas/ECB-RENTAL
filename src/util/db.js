const mongoose = require('mongoose');
require('dotenv').config({"path" : "../../.env"});

const mongoServer = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser:true
    });
    console.log('Connected');

  }catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = mongoServer;
const mongoose = require('mongoose');

let DogModel = {};

// create dog schema
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  breed: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// findByName is the only static function we need for now
DogSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  // returns the dog that is found
  return DogModel.findOne(search, callback);
};

// makes the dog model
DogModel = mongoose.model('Dog', DogSchema);

// exports
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;

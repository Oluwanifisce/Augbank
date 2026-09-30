const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  tag: {
    type: String, 
    sparse: true,
    unique: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false
  },
  role: {type: String, enum: ['user', 'admin','operator'], default: 'user'}, 
  accountNumber:{type:String, sparse:true, unique:true},
  balance:{type:Number, required:true, default:10000},
  profilePicture:{

  }
}, { 
  timestamps: true, 
  strict: "throw" 
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;

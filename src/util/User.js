const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
name : {type: String, required : true},
lastName : {type: String, required : true},
bornDate : {type: String, required : true},
mail : {type: String, required : true},
phone : {type: String, required : true},
userName : {type: String, required : true},
password : {type: String, required : true}
});

module.exports = mongoose.model("user", userSchema);


const mongoose = require('mongoose');

const user_schema = mongoose.Schema({
    username: { type: String, require: true, unique: true, lowercase: true },
    password: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    phoneno: { type: Number, require: true },
    clgname: { type: String, require: true },
    name : { type: String, require: true },
    role: {type: String, require: true}
})

const event_schema = mongoose.Schema({
    event_username: { type: String, require: true, lowercase: true, unique: true},
    event_name: { type: String, require: true},
    event_des: { type: String, require: true },
    event_time: { type: Date, require: true }, 
    event_price: {type: Number, require: true}
})

const register_schema = mongoose.Schema({
    event_username: {type: String, require: true, lowercase: true},
    username: {type: String, require: true}, 
    price: {type: Number, require: true},
    random_pw: {type: String, require: true},
    played: {type: Boolean, require:true, default: false}, 
    gain_score: {type: Number, require:true, default: null},
    outof_score: {type: Number, require:true, default: null}
    // trans_id: {type: String, require: true},
}); 

User = mongoose.model('User', user_schema, 'users');
Event = mongoose.model('Event', event_schema, 'events');
Register = mongoose.model('Register', register_schema, 'register');

module.exports = {
    User, 
    Event,
    Register
}
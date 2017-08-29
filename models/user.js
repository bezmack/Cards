var Sequelize = require("sequelize");
var bcrypt = require('bcryptjs');

var sequelize = require("../config/connection.js");

 module.exports = function(sequelize, DataTypes) {

    var Userschema = sequelize.define('user', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        username: {
            type: Sequelize.TEXT,
        },

        password: {
            type:  Sequelize.STRING,
        },

        email: {
            type:  Sequelize.STRING,
        },

        name: {
            type:  Sequelize.STRING,
        },


    });

    return Userschema;

}

//var User = module.exports = sequelize.model('user', Userschema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
//var User = module.exports = sequelize.model('user');

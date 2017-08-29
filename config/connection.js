
var Sequelize = require("sequelize");

var sequelize = new Sequelize("users", "root", "password", {
  host: "localhost",
  dialect: "mysql"

});
/*sequelize.authenticate().complete(function (err) {
 if (err) {
    console.log('There is connection in ERROR');
 } else {
    console.log('Connection has been established successfully');
 }
});*/

module.exports = sequelize;

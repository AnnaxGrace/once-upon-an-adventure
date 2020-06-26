var bcrypt = require("bcryptjs");


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // The email cannot be null, and must be a proper email before creation
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true
          }
        },
        // The password cannot be null
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        }
      });

      // User.associate = function(models){
      //   User.hasMany("", {
      //     onDelete: "cascade"
      //   });
      // };
 
      User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
      };
      
      User.addHook("beforeCreate", function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
      return User;

}

'use strict';

module.exports = function(sequelize, DataTypes) {
    var Ad = sequelize.define('Ad', {
        UserId: {
            type: DataTypes.INTEGER,
            references: 'User',
            referencesKey: 'id'
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        lookingFor: {
            type: DataTypes.TEXT
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Ad.belongsTo(models.User);
            }
        }
    });
    return Ad;
};

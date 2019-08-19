'use strict';
module.exports = (sequelize, DataTypes) => {
    const Watch = sequelize.define('Watch', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'source'
        },
        source_name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'source_name'
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'company'
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title'
        },
        title_selector: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'title_selector'
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: 'price'
        },
        price_selector: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'price_selector'
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'image'
        },
        image_selector: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'image_selector'
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });
    Watch.associate = function(models) {
    };
    return Watch;
};

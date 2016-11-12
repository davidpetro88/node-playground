/**
 * Created by david on 11/11/16.
 */
var bookshelf = require('./bookshelf');
var Joi = require('joi');
var Promise = require('bluebird');
var Address    = require('./Address');

var Person = bookshelf.Model.extend({
    tableName: 'person',
    schema: {
        name: String,
        age: Number
    },
    address: function(){
        return this.hasOne(Address);
    },
    initialize: function () {
        this.on('saving', this.validateToSave);
    },
    validateToSave: function () {
        console.log('saving...');
    }
}, {
    validateIfNameExists: Promise.method(function (name) {
        return new this({
            name: name
        }).fetch().tap(function (result) {
            // if(!result) {
            //     throw new Error('Invalid name');
            // }
            console.log('Result validte ->', result);
        });
    })
});

module.exports = Person;
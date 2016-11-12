/**
 * Created by david on 11/11/16.
 */
var bookshelf = require('./bookshelf');
var Person    = require('./Person');
var Joi       = require('joi');


var Address = bookshelf.Model.extend({
    tableName: 'address',
    schema: {
        number: Number,
        street: String
    },
    people: function() {
        // return this.belongsToMany(Person);
        return this.hasOne(Person);
    }
});
module.exports = Address;

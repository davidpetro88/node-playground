/**
 * Created by david on 11/11/16.
 */
var knex = require('knex')({
    client  : 'mysql',
    connection: {
        host    : '127.0.0.1',
        user    : 'root',
        password: '123456',
        database: 'app_bookshelf',
        charset : 'utf8'
    }
});

module.exports = require('bookshelf')(knex);
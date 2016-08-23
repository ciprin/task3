/**
 * Account.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: 'string',
            size: 128,
            required: true
        },
        email: {
            type: 'string',
            size: 128,
            required: true
        },
        password: {
            type: 'string',
            size: 128,
            required: true
        },
        role: {
            type: 'string',
            enum: ['user', 'author', 'admin'],
            //required: true,
            defaultsTo: 'user'
        },
        article: {
            collection: 'Article',
            via: 'account'
        }
    }
};

// account.create({ name: 'John', email: 'Doe', password: '12345' }).exec(console.log);
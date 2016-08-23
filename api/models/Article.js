/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: { 
            type: 'string', 
            required: true, 
            size: 128 },
        link: {
            type: 'string',
            size: 128,
        },
        account: {
            model: 'Account',
            required: true
        }
    }
};
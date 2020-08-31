const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
}


function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id: Number(id) })
}
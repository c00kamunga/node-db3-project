const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findSteps,
}


function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id: Number(id) })
}

function findSteps(id) {
    return db('steps').where({ id: Number(id) })
}
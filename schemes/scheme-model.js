const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findSteps,
    add,
}


function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id: Number(id) })
}

function findSteps(id) {
    return db('steps').where({ id: Number(id) })
    .join("schemes as s", "s.id")
    .where("s.id", scheme_id)
    .select(
        "s.scheme_name as scheme_name"
    )
}

function add(scheme) {
return db('schemes')
.insert(scheme, 'id')
.then(ids => ({ id: ids[0] }))
}
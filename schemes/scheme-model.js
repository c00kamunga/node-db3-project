const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}


function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes').where({ id: Number(id) })
}

function findSteps(id) {
    return db('schemes as s')
    .join("steps as st", 's.id', 'st.scheme_id')
    .where({scheme_id: id})
    .select(
        'st.id', 's.scheme_name', 'st.step_number', 'st.instructions'
    )
    .orderBy('st.step_number')
}

function add(scheme) {
return db('schemes')
.insert(scheme, 'id')
.then(ids => ({ id: ids[0] }))
}

function update(changes, id) {
return db('schemes')
    .where('id', Number(id))
    .update(changes)
}

function remove(id) {
    return db('schemes')
    .where('id', id)
    .delete()
}


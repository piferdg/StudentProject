const database = require("./database-connection");

module.exports = {
    list(){
        return database('classmates').select().orderBy('id', 'asc')
    },

    read(id){
        return database('classmates').select().where('id', id).first()
    },

    create(classmates){
        return database('classmates').insert(classmates).returning('*')
        .then(record => record[0])
    },

    update(id, classmates){
        return database('classmates').update(classmates).where('id', id).returning('*')
        .then(record => record[0])
    },

    delete(id){
        return database('classmates').delete().where('id', id)
    }
};

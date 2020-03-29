
exports.up = function(knex) {
    return knex.schema.table('ongs', function (table) {
        table.string('description');
    })
};

exports.down = function(knex) {
    knex.schema.table('ongs', function(table) {
        table.dropColumn('description')
      })
};

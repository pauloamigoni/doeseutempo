exports.up = function(knex) {
    return knex.schema.createTable('enderecos', function (table) {
        table.string('id').primary();
        table.string('endereco');
        table.string('numero');
        table.string('bairro');
        table.string('cidade');
        table.string('cep');
        table.string('uf', 2);
        table.string('complemento');
        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');

  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('enderecos');
  };
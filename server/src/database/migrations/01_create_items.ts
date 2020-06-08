import Knex from "knex";

export async function up(knex: Knex) {
    //criar a tabela
    return knex.schema.createTable('items',  table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('titulo').notNullable();
    })
}

export async function down(knex: Knex) {
    //voltar, deleta a tabela
    return knex.schema.dropTable('items');
}
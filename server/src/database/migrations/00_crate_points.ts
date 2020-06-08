import Knex from "knex";

export async function up(knex: Knex) {
    //criar a tabela
    return knex.schema.createTable('points',  table => {
        table.increments('id').primary();
        table.string('imagem').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('cidade').notNullable();
        table.string('uf', 2).notNullable();
    })
}

export async function down(knex: Knex) {
    //voltar, deleta a tabela
    return knex.schema.dropTable('point');
}
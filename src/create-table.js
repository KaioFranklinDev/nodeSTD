import {sql} from './db.js'

/*
sql`drop table if exists videos`.then(() =>{
    console.log('Tabela apagada')
})
*/

sql`
    CREATE TABLE users (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    peso REAL NOT NULL,
    altura REAL NOT NULL,
    imc REAL NOT NULL,
    data TEXT NOT NULL
);


`.then(() =>{
    console.log('Tabela criada!')
})

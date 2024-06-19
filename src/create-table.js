import {sql} from './db.js'

/*
sql`drop table if exists videos`.then(() =>{
    console.log('Tabela apagada')
})
*/

sql`
<<<<<<< HEAD
    CREATE TABLE users (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    peso REAL NOT NULL,
    altura REAL NOT NULL,
    imc REAL NOT NULL,
    data TEXT NOT NULL
);

=======
    CREATE TABLE videos(
        id          TEXT PRIMARY KEY,
        title       TEXT,
        description TEXT,
        duration    INTEGER
    );
>>>>>>> c4368ec949be9466d97183161e17c86e691507c5

`.then(() =>{
    console.log('Tabela criada!')
})

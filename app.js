const mysql = require('mysql');

const data = { host : 'localhost' , user:'root' , password : '' , database: 'test_mysql'};

//connection
const conexao = mysql.createConnection(data);

conexao.connect((err) => {
    if(!err) console.log('Connected!')
    else console.log('ERROR : ' + err) 
});

//CREATE
/*
const sql = 'INSERT INTO user(nome) VALUES("luffy")';
conexao.query(sql , (err , result) => {
    if (!err) console.log('1 record inserted');
    else console.log('ERROR : ' + err)
});
*/

//UPDATE
/*
const sql = 'UPDATE user SET nome = "luffy002" WHERE id = 1';
conexao.query(sql , (err , result) => {
    if(!err) console.log('record(s) updated');
    else console.log('ERROR : ' + err);
});
*/
//DELETE
/*
const sql = 'DELETE FROM user WHERE id = 1';
conexao.query(sql , (err , result) => {
    if(!err) console.log('Number of records deleted')
    else console.log('ERROR : ' + err)
});
*/

//SELECT
const sql = 'SELECT * FROM user';
conexao.query(sql , (err , rows , fields) => {
    if(!err) console.log(' : ' , rows);
    else console.log('ERROR : ' + err);
    
});
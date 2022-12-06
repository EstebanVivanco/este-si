const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eventos'
});


conexion.connect((error)=>{
    if(error){
        console.log('error alo');
        return
    }
    console.log('Conectado, zuumbi');
});

module.exports = conexion;
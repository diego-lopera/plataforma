const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Diego',
    password: '20030315', 
    database: 'usuarios'
})

connection.connect( (err) =>{
if(err)throw err
console.log('la conexion funciona')
})


const insertar = "INSERT INTO participantes (Nombre,Apellido,Grupo,password,usuario,Tipo) VALUES ('Juan', 'Perez', 'Secretaria', '102', '102', '1')"
connection.query(insertar, (err,rows)=>{
    if(err) throw err
})

connection.query('SELECT * from participantes', (err,rows) =>{
    if(err) throw err
    console.log('los datos de la tabla son:')
    console.log(rows)
    console.log('la cantidad de resultados es:')
    console.log(rows.length)
    console.log(rows[2])

})


/*
1. administrador
2. estudiante
*/


connection.end()
import mysql from "mysql";

const connection = mysql.createConnection({
  host     : '42.192.233.200',
  user     : 'test_demo',
  password : 'Lm4GNmsxsLeesPXD',
  database : 'test_demo'
});

connection.connect();

connection.query('SELECT * FROM customer_login', function (error, results, fields) {
  connection.destroy()
  if (error) throw error;
  const res = results.map(v => Object.assign({}, v));
  console.log(res)
  console.log('The solution is: ', results);
});


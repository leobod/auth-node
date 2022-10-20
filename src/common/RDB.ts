import mysql from "mysql";
import {mysql_config} from "../config";

// const connection = mysql.createConnection(mysql_config);
// connection.connect();
// connection.query('SELECT * FROM customer_login', function (error, results, fields) {
//   connection.destroy()
//   if (error) throw error;
//   const res = results.map(v => Object.assign({}, v));
//   console.log('The origin_data is: ', results);
//   console.log('The obj_data is: ', res)
// });

const pool = mysql.createPool(mysql_config);



// pool.getConnection(function(err, connection) {
//   if (err) throw err
//   connection.query('SELECT * FROM customer_login', function (error, results, fields) {
//     connection.release()
//     if (error) throw error;
//     const res = results.map(v => Object.assign({}, v));
//     console.log('The origin_data is: ', results);
//     console.log('The obj_data is: ', res)
//     pool.end()
//   });
// })

// var sql = mysql.format('UPDATE posts SET modified = ? WHERE id = ?', [CURRENT_TIMESTAMP, 42]);

export {
  pool
}

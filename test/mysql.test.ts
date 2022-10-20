
import { pool } from "../src/common/mysql";

pool.getConnection(function(err, connection) {
  if (err) throw err
  connection.query('SELECT * FROM customer_login', function (error, results, fields) {
    connection.release()
    if (error) throw error;
    const res = results.map(v => Object.assign({}, v));
    console.log('The origin_data is: ', results);
    console.log('The obj_data is: ', res)
    pool.end()
  });
})




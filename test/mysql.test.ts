
import { pool } from "../src/common/RDB";
import fs from "fs";

pool.getConnection(function(err, connection) {
  if (err) throw err
  // connection.query('SELECT * FROM customer_login a, customer_inf b WHERE a.customer_id = b.customer_id;', function (error, results, fields) {
  //   connection.release()
  //   if (error) throw error;
  //   const res = results.map(v => Object.assign({}, v));
  //   console.log('The origin_data is: ', results);
  //   console.log('The obj_data is: ', res)
  //   pool.end()
  // });

  // // 表的字段结构
  // DESCRIBE customer_login
  // // 有哪些表
  // SHOW TABLES

  connection.query('DESCRIBE customer_login', function (error, results, fields) {
    connection.release()
    if (error) throw error;
    const res = results.map(v => Object.assign({}, v));
    // console.log('The origin_data is: ', results);
    console.log('The obj_data is: ', res)
    pool.end()
    if (res && res.length > 0) {
      const table_dsl = res
      let str = ''
      str += 'interface CustomerLogin { \r\n'
      for (const item of table_dsl) {
        let type = ''
        if (item.Type.indexOf('int') !== -1) {
          type = 'number'
        } else if (item.Type.indexOf('char') !== -1) {
          type = 'string'
        } else if (item.Type.indexOf('timestamp') !== -1) {
          type = 'Date'
        }
        str += '\t' + item.Field + ': ' + type + ',\r\n';
      }
      str += '}'

      fs.writeFile('./customer_login.ts',str,function(err){
        // 如果文件写入成功，则err的值等于null
        // 如果文件写入失败，则err的值等于一个错误对象
        console.log(err)
      })
    }


  })

})






import {getConnectionFromPool} from "../src/common/RDB";

let connection = null
let tableList = []
getConnectionFromPool('SELECT SQL_CALC_FOUND_ROWS * FROM customer_login')
  .then(results => {
    console.log(results);
  })
  .finally(() => {
    getConnectionFromPool('SELECT FOUND_ROWS() as total')
      .then(results => {
        console.log(results);
      })
  })


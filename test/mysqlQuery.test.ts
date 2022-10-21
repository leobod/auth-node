

import {getConnectionFromPool} from "../src/common/RDB";
import {toCamelCase} from "../src/utils";

let connection = null
let tableList = []
getConnectionFromPool('SELECT SQL_CALC_FOUND_ROWS * FROM customer_login')
  .then(results => {
    console.log(results);
    const dataList = (results as Array<any>).map(item => {
      const keys = Object.keys(item);
      const camelCaseKeys = keys.map(toCamelCase);
      const model = {}
      for (let i = 0; i < keys.length; ++i) {
        model[camelCaseKeys[i]] = item[keys[i]];
      }
      return model;
    });
    console.log(dataList);
  })
  .finally(() => {
    getConnectionFromPool('SELECT FOUND_ROWS() as total')
      .then(results => {
        console.log(results);
      })
  })


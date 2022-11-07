import fs from "fs";
import {getPureConnectionFromPool} from "../src/common/RDB";
import { transformTableToModel, getExportTableModel } from '../src/tools/TableToTsModel';
import {toCamelCase, toPascalCase} from "../src/utils";

let connection = null
let tableList = []

const getTables = function () {
  getPureConnectionFromPool()
    .then(con => {
      connection = con;
      connection.query('SHOW TABLES', (err, results, fields) => {
        if (err) throw err;
        tableList = results.map(item => {
          const keys = Object.keys(item);
          return item[keys[0]];
        });
        for (const tableName of tableList) {
          getTableModel(tableName);
        }
        const tableModelIndexContent = getExportTableModel(tableList);
        fs.writeFile(`./test/model/index.ts`, tableModelIndexContent, function (err) {
          if (err) {
            console.log(`err`);
          } else {
            console.log(`success`);
          }
        })
      })
    })
    .catch((err) => {
      console.log(err);
      tableList = []
    })
};

const getTableModel = function (tableName) {
  connection.query(`DESCRIBE ${tableName}`, (err, results, fields) => {
    if (err) throw err;
    const tableColumnList = results.map(item => Object.assign({}, item));
    // console.log(tableColumnList)
    const camelTableName = toPascalCase(tableName);
    const content = transformTableToModel(tableName, tableColumnList);
    fs.writeFile(`./test/model/${camelTableName}.ts`, content, function (err) {
      if (err) {
        console.log(`${camelTableName} err:`, err);
      } else {
        console.log(`${camelTableName} success`);
      }
    })
  })
};

getTables();

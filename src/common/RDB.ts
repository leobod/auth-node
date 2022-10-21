import mysql from "mysql";
import {mysql_config} from "../config";
import { logger } from "../middleware/Log4j";

/**
 * 开启pool
 */
const pool = mysql.createPool(mysql_config);

/**
 * 从pool中获取连接
 */
const getPureConnectionFromPool = function () {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        logger.error('getConnectionFromPool获取连接失败')
        reject(err)
      } else {
        resolve(connection)
      }
    })
  })
}

/**
 * 从pool中获取连接对象
 */
const getConnectionFromPool = function (sql) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        logger.error('getConnectionFromPool获取连接失败');
        reject(err);
      } else {
        connection.query(sql, (err, results, fields) => {
          if (err) {
            logger.error('getConnectionFromPool,执行语句报错');
            reject(err);
          } else {
            resolve(results)
            connection.release();
          }
        })
      }
    })
  })
}

/**
 * 预处理sql
 * @param sql
 * @param params
 */
const prepareSql = function (sql, params): string {
  // 'UPDATE posts SET modified = ? WHERE id = ?'
  return mysql.format(sql, params);
}

/**
 * 包装事务
 * @param connection
 */
const wrapperTransaction = function (connection) {
  return {
    connection,
    start: function () {
      return new Promise((resolve, reject) => {
        this.connection.beginTransaction((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(null);
          }
        })
      });
    },
    query: function (sql) {
      return new Promise((resolve, reject) => {
        this.connection.query(sql, (err, results, fields) => {
          if (err) {
            this.connection.rollback()
            reject(err)
          } else {
            resolve(results)
          }
        })
      })
    },
    commit: function () {
      return new Promise((resolve, reject) => {
        this.connection.commit((err) => {
          if (err) {
            this.connection.rollback()
            reject(err)
          } else {
            resolve(null)
          }
        });
      })
    }
  };
}

export {
  pool,
  getPureConnectionFromPool,
  getConnectionFromPool,
  prepareSql,
  wrapperTransaction
}


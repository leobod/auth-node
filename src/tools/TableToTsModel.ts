import {TableColumnDSL} from "../type/Table";
import {toCamelCase} from "../utils";

/**
 * 数据库类型变JS类型定义
 */
const getFieldTypeByModel = function (fieldModel: TableColumnDSL): string {
  return getFieldTypeByModelType(fieldModel.Type);
};

/**
 * 数据库类型变JS类型定义
 */
const getFieldTypeByModelType = function (type: string): string {
  let result = 'string'
  if (type && type !== '') {
    if (type.indexOf('tinyint') !== -1 || type.indexOf('smallint') !== -1 || type.indexOf('int') !== -1) {
      result = 'number'
    } else if (type.indexOf('decimal') !== -1 || type.indexOf('float') !== -1) {
      result = 'number'
    } else if (type.indexOf('varchar') !== -1 || type.indexOf('char') !== -1) {
      result = 'string';
    } else if (type.indexOf('text') !== -1) {
      result = 'string';
    } else if (type.indexOf('datetime') !== -1 || type.indexOf('timestamp') !== -1) {
      result = 'Date';
    } else if (type.indexOf('enum') !== -1) {
      result = 'number'
    } else {
      result = 'string'
    }
  }
  return result;
};

/**
 * 是否可选参数
 * @param fieldModel
 */
const getFieldIsOptional = function (fieldModel: TableColumnDSL): boolean {
  if (fieldModel) {
    if (fieldModel.Null === 'NO' && fieldModel.Default === null) {
      return false
    }
  }
  return true
};

/**
 * 生成新的行
 * @param content
 */
const getNewLine = function (content: string): string {
  return content + '\r\n';
}

/**
 * 生成model
 * @param modelName
 * @param content
 */
const getModelDefine = function (modelName: string, content: string):string {
  const preText = getNewLine(`interface ${modelName} {`);
  const postText = getNewLine(`}`);
  return preText + content + postText;
}

/**
 * 根据表名与列的定义，生成TS模型定义
 * @param tableName
 * @param tableColumnList
 */
const transformTableToModel = function (tableName: string, tableColumnList: Array<TableColumnDSL>): string {
  const camelCaseTableName = toCamelCase(tableName);
  if (tableColumnList && tableColumnList.length > 0) {
    const tableColumnFieldList = []
    for (const tableColumn of tableColumnList) {
      const fieldType = getFieldTypeByModel(tableColumn);
      const fieldName = toCamelCase(tableColumn.Field);
      const isOptional = getFieldIsOptional(tableColumn);
      if (isOptional) {
        tableColumnFieldList.push(getNewLine('\t' + fieldName + '?: ' + fieldType + ','));
      } else {
        tableColumnFieldList.push(getNewLine('\t' + fieldName + ': ' + fieldType + ','));
      }
    }
    return getModelDefine(camelCaseTableName, tableColumnFieldList.join(''));
  }
}

export {
  getFieldTypeByModel,
  getFieldTypeByModelType,
  getFieldIsOptional,
  getNewLine,
  getModelDefine,
  transformTableToModel
}

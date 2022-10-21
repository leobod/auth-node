import {TableColumnDSL} from "../type/Table";
import {toCamelCase, toPascalCase} from "../utils";

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

  const blankNewLine = getNewLine('');
  const expText = getNewLine(`export { ${modelName} }`);
  return preText + content + postText + blankNewLine + expText;
}

/**
 * 根据表名与列的定义，生成TS模型定义
 * @param tableName
 * @param tableColumnList
 */
const transformTableToModel = function (tableName: string, tableColumnList: Array<TableColumnDSL>): string {
  const pascalCaseTableName = toPascalCase(tableName);
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
    return getModelDefine(pascalCaseTableName, tableColumnFieldList.join(''));
  }
}

/**
 * 生成统一的model出口
 * @param tableNameList
 */
const getExportTableModel = function (tableNameList: Array<string>) {
  const pascalCaseTableNameList = tableNameList.map(name => toPascalCase(name));
  const tableModelList = []
  for (const name of pascalCaseTableNameList) {
    tableModelList.push(getNewLine(`import { ${name} } from "./${name}"`));
  }
  tableModelList.push(getNewLine(''));
  tableModelList.push(getNewLine(`export {`));
  for (const name of pascalCaseTableNameList) {
    tableModelList.push(getNewLine(`\t${name},`));
  }
  tableModelList.push(getNewLine(`}`));
  return tableModelList.join('');
};

export {
  getFieldTypeByModel,
  getFieldTypeByModelType,
  getFieldIsOptional,
  getNewLine,
  getModelDefine,
  transformTableToModel,
  getExportTableModel
}

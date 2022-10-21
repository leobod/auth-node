

/**
 * 下划线转帕斯卡
 * @param val
 */
const toPascalCase = function (name) {
  const camelCaseName = toCamelCase(name);
  const pascalCaseName = camelCaseName.slice(0, 1).toUpperCase() + camelCaseName.slice(1);
  return pascalCaseName;
}

/**
 * 下划线转驼峰
 * @param name
 */
const toCamelCase = function (name) {
  return name.replace(/\_(\w)/g, function(all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * 驼峰转换下划线
 * @param name
 */
const toKebabCase = function (name, isPascalCase = false) {
  if (isPascalCase) {
    const kebabCase = name.replace(/([A-Z])/g, "_$1").toLowerCase();
    return kebabCase.slice(1);
  } else {
    return name.replace(/([A-Z])/g, "_$1").toLowerCase();
  }
};

/**
 * 匈牙利命名
 * @param val
const toHungarian = function (val) {

}
 */

export {
  toPascalCase,
  toCamelCase,
  toKebabCase
}

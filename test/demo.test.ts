const { TableToTsModel } = require('../src/tools/TableToTsModel')

const sum = function (a, b) {
  return a + b;
}

test('demo', () => {
  expect(sum(1,2)).toBe(3);
});

test('TsDefine', () => {
  const tsDefine = new TableToTsModel();
  console.log(tsDefine.underlineToCamel('customer_login'));
  expect(tsDefine.underlineToCamel('customer_login')).toBe('CustomerLogin');
})

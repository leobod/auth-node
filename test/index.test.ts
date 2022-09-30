
const getHello = function () {
  return 'Hello';
}

test('demo', () => {
  expect(getHello()).toBe('Hello');
});

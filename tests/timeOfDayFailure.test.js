// Intentionally flaky: depends on current minute being even

test('fails on odd minutes, passes on even minutes', () => {
  const now = new Date();
  const minute = now.getUTCMinutes();
  // This will flip behavior every minute
  const isEvenMinute = minute % 2 === 0;
  expect(isEvenMinute).toBe(true);
});


